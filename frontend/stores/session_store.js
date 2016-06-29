const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;

const SessionStore = new Store(Dispatcher);
let _currentUser = {};

let _currentUserfetched = false

const _login = function (currentUser) {
  _currentUser = currentUser
  _currentUserfetched = true
}

const _logout = function () {
  _currentUser = {}
  _currentUserfetched = true
}

SessionStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case SessionStore.LOGIN:
      _login(payload.currentUser);
      break;
    case SessionStore.LOGOUT:
      _logout();
      break;
  }
  this.__emitChange();
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
