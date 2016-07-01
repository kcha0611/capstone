const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ErrorConstants = require('../constants/error_constants');

const SessionActions = {
  handleErrors (form, errors) {
    ErrorActions.setErrors(form, errors)

  },
  logIn (data) {
    SessionApiUtil.logIn(data, this.receiveCurrentUser, this.handleErrors)
  },
  logOut () {
    // debugger
    SessionApiUtil.logOut(this.removeCurrentUser)
  },
  signUp (data) {
    SessionApiUtil.signUp(data, this.receiveCurrentUser, this.handleErrors)
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
    // debugger
    Dispatcher.dispatch({
      actionType: SessionConstants.LOGOUT
    })
    hashHistory.push('/login')
  }
}

module.exports = SessionActions;
