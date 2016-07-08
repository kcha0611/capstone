const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const StepConstants = require('../constants/step_constants');

const StepStore = new Store(Dispatcher);

let _steps = []

StepStore.all = function () {
  return _steps.slice();
}

StepStore.resetSteps = function (steps) {
  // debugger
  _steps = steps
  this.__emitChange();
}

StepStore.__onDispatch = function (payload) {
  // debugger
  switch (payload.actionType) {
    case StepConstants.STEPS_RECEIVED:
      this.resetSteps(payload.steps)
      break;
    case StepConstants.STEP_RECEIVED:
    debugger
      this.resetStep(payload.step)
      break;
  }
}

StepStore.resetStep = function (step) {
  _steps.push(step)
  this.__emitChange()
}

module.exports = StepStore;
