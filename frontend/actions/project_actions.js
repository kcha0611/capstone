const Dispatcher = require('../dispatcher/dispatcher');
const SessionConstants = require('../constants/session_constants');
const SessionApiUtil = require('../util/session_api_util');
const ErrorActions = require('./error_actions');
const hashHistory = require('react-router').hashHistory;
const ProjectApiUtil = require('../util/project_api_util');
const ProjectConstants = require('../constants/project_constants');
const ReactRouter = require('react-router');

const ProjectActions = {
  fetchAllProjects() {
    ProjectApiUtil.fetchAllProjects(this.receiveProjects)
  },
  fetchSearchedProjects (data) {
    ProjectApiUtil.fetchSearchedProjects(data, this.receiveProjects)
  },
  getProject (id) {
    ProjectApiUtil.getProject(id, this.receiveProject)
  },
  createProject(project, cb) {
    // debugger
    ProjectApiUtil.createProject(project, this.receiveProject, cb)
  },
  updateProject (project) {
    ProjectApiUtil.editProject(project, this.receiveProject)
  },
  deleteProject (id) {
    ProjectApiUtil.deleteProject(id, this.removeProject)
  },
  receiveProjects(projects) {
    // debugger
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECTS_RECEIVED,
      projects: projects
    })
  },
  receiveProject(project) {
    // debugger
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_RECEIVED,
      project: project
    })
  },
  removeProject(project) {
    Dispatcher.dispatch({
      actionType: ProjectConstants.PROJECT_REMOVED,
      project: project
    })
  },
}

module.exports = ProjectActions;
