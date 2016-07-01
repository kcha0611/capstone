const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const SessionConstants = require('../constants/session_constants');

const SessionStore = new Store(Dispatcher);
let _currentUser = {};

let _currentUserfetched = false

const _login = function (currentUser) {
  // debugger
  _currentUser = currentUser
  _currentUserfetched = true
}

const _logout = function () {
  // debugger
  _currentUser = {}
  _currentUserfetched = true
}

SessionStore.__onDispatch = function (payload) {
    // debugger
  switch (payload.actionType) {
    case SessionConstants.LOGIN:
    // debugger
      _login(payload.currentUser);
      this.__emitChange();
      break;
    case SessionConstants.LOGOUT:
    // debugger
      _logout();
      this.__emitChange();
      break;
  }
}
SessionStore.currentUser = function() {
  return Object.assign({}, _currentUser);
};

SessionStore.currentUserHasBeenFetched = function () {
  return !!_currentUserHasBeenFetched;
};

SessionStore.isUserLoggedIn = function() {
  return !!_currentUser.id;
};

module.exports = SessionStore;
