import { NativeModules } from 'react-native';
import { RESULTS } from './constants';
import { uniq } from './utils';
const RNP = NativeModules.RNPermissions;

async function openSettings() {
  await RNP.openSettings();
}

async function check(permission) {
  return RNP.available.includes(permission) ? RNP.check(permission) : RESULTS.UNAVAILABLE;
}

async function request(permission) {
  return RNP.available.includes(permission) ? RNP.request(permission) : RESULTS.UNAVAILABLE;
}

export function checkNotifications() {
  return RNP.checkNotifications();
}
export function requestNotifications(options) {
  return RNP.requestNotifications(options);
}

async function checkMultiple(permissions) {
  const output = {};
  const dedup = uniq(permissions);
  await Promise.all(dedup.map(async permission => {
    output[permission] = await check(permission);
  }));
  return output;
}

async function requestMultiple(permissions) {
  const output = {};
  const dedup = uniq(permissions);

  for (let index = 0; index < dedup.length; index++) {
    const permission = dedup[index];
    output[permission] = await request(permission);
  }

  return output;
}

export const module = {
  openSettings,
  check,
  request,
  checkNotifications,
  requestNotifications,
  checkMultiple,
  requestMultiple
};
//# sourceMappingURL=module.ios.js.map