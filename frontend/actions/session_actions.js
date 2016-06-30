const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
// const hashHistory = ReactRouter.hashHistory;
// const ReactRouter = require('react-router');

const SessionActions = {
  logIn (data) {
    SessionApiUtil.logIn(data, this.receiveCurrentUser)
  },
  logOut () {
    SessionApiUtil.logOut(this.removeCurrentUser)
  },
  signUp (data) {
    SessionApiUtil.signUp(data, this.receiveCurrentUser)
  },
  receiveCurrentUser (currentUser) {
    // debugger
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGIN,
      currentUser: currentUser
    })
  },
  fetchCurrentUser (complete) {
    SessionApiUtil.fetchCurrentUser(this.receiveCurrentUser, complete)
  },
  removeCurrentUser () {
    debugger
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT,
    })
    hashHistory.push('/login')
  }
}

module.exports = SessionActions;
