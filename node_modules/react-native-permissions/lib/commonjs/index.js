"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var _exportNames = {
  openSettings: true,
  check: true,
  request: true,
  checkNotifications: true,
  requestNotifications: true,
  checkMultiple: true,
  requestMultiple: true,
  PERMISSIONS: true,
  RESULTS: true
};
Object.defineProperty(exports, "PERMISSIONS", {
  enumerable: true,
  get: function () {
    return _constants.PERMISSIONS;
  }
});
Object.defineProperty(exports, "RESULTS", {
  enumerable: true,
  get: function () {
    return _constants.RESULTS;
  }
});
exports.default = exports.requestMultiple = exports.checkMultiple = exports.requestNotifications = exports.checkNotifications = exports.request = exports.check = exports.openSettings = void 0;

var _reactNative = require("react-native");

var _constants = require("./constants");

var _module2 = require("./module");

var _types = require("./types");

Object.keys(_types).forEach(function (key) {
  if (key === "default" || key === "__esModule") return;
  if (Object.prototype.hasOwnProperty.call(_exportNames, key)) return;
  Object.defineProperty(exports, key, {
    enumerable: true,
    get: function () {
      return _types[key];
    }
  });
});

if (_reactNative.NativeModules.RNPermissions == null) {
  throw new Error("react-native-permissions: NativeModule.RNPermissions is null. To fix this issue try these steps:\n  \u2022 If you are using CocoaPods on iOS, run `pod install` in the `ios` directory and then clean, rebuild and re-run the app. You may also need to re-open Xcode to get the new pods.\n  \u2022 If you are getting this error while unit testing you need to mock the native module. You can use this to get started: https://github.com/react-native-community/react-native-permissions/blob/master/mock.js\n  If none of these fix the issue, please open an issue on the Github repository: https://github.com/react-native-community/react-native-permissions");
}

const openSettings = _module2.module.openSettings;
exports.openSettings = openSettings;
const check = _module2.module.check;
exports.check = check;
const request = _module2.module.request;
exports.request = request;
const checkNotifications = _module2.module.checkNotifications;
exports.checkNotifications = checkNotifications;
const requestNotifications = _module2.module.requestNotifications;
exports.requestNotifications = requestNotifications;
const checkMultiple = _module2.module.checkMultiple;
exports.checkMultiple = checkMultiple;
const requestMultiple = _module2.module.requestMultiple;
exports.requestMultiple = requestMultiple;
var _default = {
  PERMISSIONS: _constants.PERMISSIONS,
  RESULTS: _constants.RESULTS,
  openSettings,
  check,
  request,
  checkNotifications,
  requestNotifications,
  checkMultiple,
  requestMultiple
};
exports.default = _default;
//# sourceMappingURL=index.js.map