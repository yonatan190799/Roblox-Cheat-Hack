"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.module = void 0;

var _reactNative = require("react-native");

var _constants = require("./constants");

var _utils = require("./utils");

const RNP = _reactNative.NativeModules.RNPermissions;

function coreStatusToStatus(status) {
  switch (status) {
    case 'granted':
      return _constants.RESULTS.GRANTED;

    case 'denied':
      return _constants.RESULTS.DENIED;

    case 'never_ask_again':
      return _constants.RESULTS.BLOCKED;

    default:
      return _constants.RESULTS.UNAVAILABLE;
  }
}

async function openSettings() {
  await RNP.openSettings();
}

async function check(permission) {
  if (!RNP.available.includes(permission)) {
    return _constants.RESULTS.UNAVAILABLE;
  }

  if (await _reactNative.PermissionsAndroid.check(permission)) {
    return _constants.RESULTS.GRANTED;
  }

  return (await RNP.isNonRequestable(permission)) ? _constants.RESULTS.BLOCKED : _constants.RESULTS.DENIED;
}

async function request(permission, rationale) {
  if (!RNP.available.includes(permission)) {
    return _constants.RESULTS.UNAVAILABLE;
  }

  const status = coreStatusToStatus(await _reactNative.PermissionsAndroid.request(permission, rationale));

  if (status === _constants.RESULTS.BLOCKED) {
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
      unavailable[permission] = _constants.RESULTS.UNAVAILABLE;
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
  const dedup = (0, _utils.uniq)(permissions);
  const {
    unavailable: output,
    available
  } = splitByAvailability(dedup);
  const blocklist = await RNP.getNonRequestables();
  await Promise.all(available.map(async permission => {
    const granted = await _reactNative.PermissionsAndroid.check(permission);
    output[permission] = granted ? _constants.RESULTS.GRANTED : blocklist.includes(permission) ? _constants.RESULTS.BLOCKED : _constants.RESULTS.DENIED;
  }));
  return output;
}

async function requestMultiple(permissions) {
  const toSetAsNonRequestable = [];
  const dedup = (0, _utils.uniq)(permissions);
  const {
    unavailable: output,
    available
  } = splitByAvailability(dedup);
  const statuses = await _reactNative.PermissionsAndroid.requestMultiple(available);

  for (const permission in statuses) {
    if (statuses.hasOwnProperty(permission)) {
      const status = coreStatusToStatus(statuses[permission]);
      output[permission] = status;
      status === _constants.RESULTS.BLOCKED && toSetAsNonRequestable.push(permission);
    }
  }

  if (toSetAsNonRequestable.length > 0) {
    await RNP.setNonRequestables(toSetAsNonRequestable);
  }

  return output;
}

const _module = {
  openSettings,
  check,
  request,
  checkNotifications,
  requestNotifications: checkNotifications,
  checkMultiple,
  requestMultiple
};
exports.module = _module;
//# sourceMappingURL=module.android.js.map