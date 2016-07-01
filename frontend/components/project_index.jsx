const React = require('react');
const ProjectIndexItem = require('./project_index_item');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const hashHistory = require('react-router').hashHistory;
const ReactRouter = require('react-router');
const ProjectForm = require('./project_form');

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {
      projects: []
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._handleChange)
    ProjectActions.fetchAllProjects();
  },
  componentWillUnmount: function () {
    this.projectListener.remove();
  },
  _handleChange () {
    this.setState({projects: ProjectStore.all()})
  },
  render () {
    // debugger
    return (
      <div>
        <h2>Featured Projects: </h2>
        <ul>
          {this.state.projects.map ((project) => {
            return <ProjectIndexItem project={project} key={project.id}></ProjectIndexItem>
          })
        }
        </ul>
      </div>
    )
  }
})
module.exports = ProjectIndex;
