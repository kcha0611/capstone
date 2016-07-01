const Dispatcher = require('../dispatcher/dispatcher');
const Store = require('flux/utils').Store;
const ProjectConstants = require('../constants/project_constants');

const ProjectStore = new Store(Dispatcher);

let _projects = {};

ProjectStore.all = function () {
  // debugger
  return Object.assign({}, _projects)
}

ProjectStore.find = function (id) {
  return _projects[id]
}

ProjectStore.__onDispatch = function (payload) {

  switch (payload.actionType) {
    case ProjectConstants.PROJECTS_RECEIVED:
      this.resetProjects(payload.projects);
      break;
    case ProjectConstants.PROJECT_RECEIVED:
      this.resetProject(payload.project);
      break;
    case ProjectConstants.PROJECT_REMOVED:
      this.removeProject(payload.project);
      break;
  }
}

ProjectStore.resetProjects = function (projects) {
  // debugger
  _projects = projects
  this.__emitChange();
}

ProjectStore.resetProject = function (project) {
  _projects[project.id] = project
  this.__emitChange();
}

ProjectStore.removeProject = function (project) {
  delete _projects[project.id]
  this.__emitChange();
}

module.exports = ProjectStore;
