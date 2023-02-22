import { NativeModules, PermissionsAndroid as Core } from 'react-native';
import { RESULTS } from './constants';
import { uniq } from './utils';
const RNP = NativeModules.RNPermissions;

function coreStatusToStatus(status) {
  switch (status) {
    case 'granted':
      return RESULTS.GRANTED;

    case 'denied':
      return RESULTS.DENIED;

    case 'never_ask_again':
      return RESULTS.BLOCKED;

    default:
      return RESULTS.UNAVAILABLE;
  }
}

async function openSettings() {
  await RNP.openSettings();
}

async function check(permission) {
  if (!RNP.available.includes(permission)) {
    return RESULTS.UNAVAILABLE;
  }

  if (await Core.check(permission)) {
    return RESULTS.GRANTED;
  }

  return (await RNP.isNonRequestable(permission)) ? RESULTS.BLOCKED : RESULTS.DENIED;
}

async function request(permission, rationale) {
  if (!RNP.available.includes(permission)) {
    return RESULTS.UNAVAILABLE;
  }

  const status = coreStatusToStatus(await Core.request(permission, rationale));

  if (status === RESULTS.BLOCKED) {
    await RNP.setNonRequestable(permission);
  }

  return status;
}

function splitByAvailability(permissions) {
  const unavailable = {};
  const available = [];

  for (let index = 0; index < permissions.length; index++) {
    const permission = permissions[index];

    if (RNP.available.includes(permission)) {
      available.push(permission);
    } else {
      unavailable[permission] = RESULTS.UNAVAILABLE;
    }
  }

  return {
    unavailable,
    available
  };
}

function checkNotifications() {
  return RNP.checkNotifications();
}

async function checkMultiple(permissions) {
  const dedup = uniq(permissions);
  const {
    unavailable: output,
    available
  } = splitByAvailability(dedup);
  const blocklist = await RNP.getNonRequestables();
  await Promise.all(available.map(async permission => {
    const granted = await Core.check(permission);
    output[permission] = granted ? RESULTS.GRANTED : blocklist.includes(permission) ? RESULTS.BLOCKED : RESULTS.DENIED;
  }));
  return output;
}

async function requestMultiple(permissions) {
  const toSetAsNonRequestable = [];
  const dedup = uniq(permissions);
  const {
    unavailable: output,
    available
  } = splitByAvailability(dedup);
  const statuses = await Core.requestMultiple(available);

  for (const permission in statuses) {
    if (statuses.hasOwnProperty(permission)) {
      const status = coreStatusToStatus(statuses[permission]);
      output[permission] = status;
      status === RESULTS.BLOCKED && toSetAsNonRequestable.push(permission);
    }
  }

  if (toSetAsNonRequestable.length > 0) {
    await RNP.setNonRequestables(toSetAsNonRequestable);
  }

  return output;
}

export const module = {
  openSettings,
  check,
  request,
  checkNotifications,
  requestNotifications: checkNotifications,
  checkMultiple,
  requestMultiple
};
//# sourceMappingURL=module.android.js.map