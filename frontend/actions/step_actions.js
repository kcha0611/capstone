const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const StepApiUtil = require('../util/step_api_util');
const StepConstants = require('../constants/step_constants');
const ReactRouter = require('react-router');

const StepActions = {
  fetchAllSteps(projectId) {
    StepApiUtil.fetchSteps(projectId, this.receiveSteps)
  },
  createStep(projectId, step) {
    StepApiUtil.createStep(projectId, step, this.receiveStep)
  },
  receiveSteps (steps) {
    Dispatcher.dispatch({
      actionType: StepConstants.STEPS_RECEIVED,
      steps: steps
    })
  },
  receiveStep (step) {
    Dispatcher.dispatch({
      actionType: StepConstants.STEP_RECEIVED,
      step: step
    })
  }
}

module.exports = StepActions;
