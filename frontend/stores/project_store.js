const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;

const ProjectStore = new Store(Dispatcher);

let _projects = {};

ProjectStore.all = function () {
  return Object.keys(_projects).map ((projectId) {
    return _projects[projectId]
  });
}

ProjectStore.find = function (id) {
  return _projects[id]
}

ProjectStore.__onDispatch = function (payload) {
  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      resetProjects(payload.projects);
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      resetProject(payload.project);
      break;
    case ProjectConstants.PROJECT_REMOVED:
      removeProject(payload.project);
  }
  this.__emitChange();
}

resetProjects (projects) {
  _projects = {}
  for (var i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i]
  }
}

resetProject (project) {
  _projects[project.id] = project
}

removeProject (project) {
  delete _projects[project.id]
}
