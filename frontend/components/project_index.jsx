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
      projects: {}
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._handleChange)
    // debugger
    ProjectActions.fetchAllProjects();
  },
  componentWillUnmount: function () {
    this.projectListener.remove();
  },
  _handleChange () {
    this.setState({projects: ProjectStore.all()})
  },
  render () {
    let projectKeys = Object.keys(this.state.projects)
    return (
      <div>
        <h2 className="proj-index-header">Featured</h2>
        <ul>
          {projectKeys.map ((key) => {
            return <ProjectIndexItem project={this.state.projects[key]} key={key}></ProjectIndexItem>
          })
        }
        </ul>
      </div>
    )
  }
})
module.exports = ProjectIndex;
