"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.checkNotifications = checkNotifications;
exports.requestNotifications = requestNotifications;
exports.module = void 0;

var _reactNative = require("react-native");

var _constants = require("./constants");

var _utils = require("./utils");

const RNP = _reactNative.NativeModules.RNPermissions;

async function openSettings() {
  await RNP.openSettings();
}

async function check(permission) {
  return RNP.available.includes(permission) ? RNP.check(permission) : _constants.RESULTS.UNAVAILABLE;
}

async function request(permission) {
  return RNP.available.includes(permission) ? RNP.request(permission) : _constants.RESULTS.UNAVAILABLE;
}

function checkNotifications() {
  return RNP.checkNotifications();
}

function requestNotifications(options) {
  return RNP.requestNotifications(options);
}

async function checkMultiple(permissions) {
  const output = {};
  const dedup = (0, _utils.uniq)(permissions);
  await Promise.all(dedup.map(async permission => {
    output[permission] = await check(permission);
  }));
  return output;
}

async function requestMultiple(permissions) {
  const output = {};
  const dedup = (0, _utils.uniq)(permissions);

  for (let index = 0; index < dedup.length; index++) {
    const permission = dedup[index];
    output[permission] = await request(permission);
  }

  return output;
}

const _module = {
  openSettings,
  check,
  request,
  checkNotifications,
  requestNotifications,
  checkMultiple,
  requestMultiple
};
exports.module = _module;
//# sourceMappingURL=module.ios.js.map