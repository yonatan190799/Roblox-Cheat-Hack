import { RESULTS } from './constants';

async function check() {
  return RESULTS.UNAVAILABLE;
}

async function checkNotifications() {
  return {
    status: RESULTS.UNAVAILABLE,
    settings: {}
  };
}

async function checkMultiple(permissions) {
  return permissions.reduce((acc, permission) => {
    acc[permission] = RESULTS.UNAVAILABLE;
    return acc;
  }, {});
}

export const module = {
  openSettings: Promise.reject,
  check,
  request: check,
  checkNotifications,
  requestNotifications: checkNotifications,
  checkMultiple,
  requestMultiple: checkMultiple
};
//# sourceMappingURL=module.js.map