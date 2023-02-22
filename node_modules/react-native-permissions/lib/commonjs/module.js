"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.module = void 0;

var _constants = require("./constants");

async function check() {
  return _constants.RESULTS.UNAVAILABLE;
}

async function checkNotifications() {
  return {
    status: _constants.RESULTS.UNAVAILABLE,
    settings: {}
  };
}

async function checkMultiple(permissions) {
  return permissions.reduce((acc, permission) => {
    acc[permission] = _constants.RESULTS.UNAVAILABLE;
    return acc;
  }, {});
}

const _module = {
  openSettings: Promise.reject,
  check,
  request: check,
  checkNotifications,
  requestNotifications: checkNotifications,
  checkMultiple,
  requestMultiple: checkMultiple
};
exports.module = _module;
//# sourceMappingURL=module.js.map