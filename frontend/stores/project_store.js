const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ProjectConstants = require('../constants/project_constants');

const ProjectStore = new Store(Dispatcher);

let _projects = {};

ProjectStore.all = function () {
  return Object.keys(_projects).map ((projectId) => {
    return _projects[projectId]
  });
}

ProjectStore.find = function (id) {
  return _projects[id]
}

ProjectStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      debugger
      resetProjects(payload.projects);
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      resetProject(payload.project);
      break;
    case ProjectConstants.PROJECT_REMOVED:
      removeProject(payload.project);
      break;
  }
  this.__emitChange();
}

const resetProjects = function (projects) {
  _projects = {}
  for (var i = 0; i < projects.length; i++) {
    _projects[projects[i].id] = projects[i]
  }
}

const resetProject = function (project) {
  _projects[project.id] = project
}

const removeProject = function (project) {
  delete _projects[project.id]
}

module.exports = ProjectStore;
