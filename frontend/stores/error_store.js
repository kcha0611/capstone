const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ErrorConstants = require('../constants/error_constants');

const ErrorStore = new Store(Dispatcher);
let _errors = {};
let _form = "";


ErrorStore.setErrors = function (payload){
  _errors = payload.errors;
  _form = payload.form;
  ErrorStore.__emitChange();
}

ErrorStore.clearErrors = function (){
  _errors = {};
  _form = "";
  ErrorStore.__emitChange();
}

ErrorStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ErrorConstants.SET_ERRORS:
      ErrorStore.setErrors(payload);
      break;
    case ErrorConstants.CLEAR_ERRORS:
      ErrorStore.clearErrors();
      break;
  }
};

ErrorStore.formErrors = function (form) {
  // debugger
  if (form !== _form) {
    return {};
  }
  const result = {};
  for (let field in _errors) {
    result[field] = Array.from(_errors[field]);
  }

  return result;
};

ErrorStore.form = function() {
  return _form;
};
module.exports = ErrorStore;
