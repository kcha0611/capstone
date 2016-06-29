const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;

const SessionActions = {
  logIn (data) {
    SessionApiUtil.logIn(data, this.receiveCurrentUser, ErrorActions.setErrors)
  },
  logOut () {
    SessionApiUtil.logOut(this.removeCurrentUser)
  },
  signUp (data) {
    SessionApiUtil.signUp(data, this.receiveCurrentUser, ErrorActions.setErrors)
  },
  receiveCurrentUser (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },
  fetchCurrentUser (complete) {
    SessionApiUtil.fetchCurrentUser(this.receiveCurrentUser, complete)
  },
  removeCurrentUser (currentUser) {
    AppDispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
      currentUser: currentUser
    })
  }
}
