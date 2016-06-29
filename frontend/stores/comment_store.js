const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;

const CommentStore = new Store(Dispatcher);

let _comments = {};

CommentStore.all = function () {
  return Object.keys(_comments).map ((commentId) {
    return _comments[commentId]
  });
}

CommentStore.find = function (id) {
  return _comments[id]
}

CommentStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case CommentConstants.PROJECTS_RECEIVED:
      resetComments(payload.comments);
      break;
    case CommentConstants.PROJECT_RECEIVED:
      resetComment(payload.comment);
      break;
    case CommentConstants.PROJECT_REMOVED:
      removeComment(payload.comment);
  }
  this.__emitChange();
}

resetComments (comments) {
  _comments = {}
  for (var i = 0; i < comments.length; i++) {
    _comments[comments[i].id] = comments[i]
  }
}

resetComment (comment) {
  _comments[comment.id] = comment
}

removeComment (comment) {
  delete _comments[comment.id]
}
