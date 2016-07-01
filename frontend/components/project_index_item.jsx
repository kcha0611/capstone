const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const Link = require('react-router').Link;

const ProjectIndexItem = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.project.title,
      description: this.props.project.description
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange)
    ProjectActions.getProject(this.props.project.id)
  },
  _onChange() {
    this.setState({title: this.props.project.title, description: this.props.project.description})
  },
  componentWillUnmount() {
    this.projectListener.remove()
  },
  _edit () {
    hashHistory.push(`projects/${this.props.project.id}/edit`)
  },
  _delete () {
    ProjectActions.deleteProject(this.props.project.id)
  },
  submit (e) {
    e.preventDefault();
    ProjectActions.createProject({title: this.props.project.title, description: this.props.project.description})
  },
  render () {
    return (
    <form onSubmit={this.submit}>
      <div>
        <label className="lab-proj-ind-item">
          <Link to={`/api/projects/${this.props.project.id}`}>{this.props.project.title}</Link>
         </label>
      </div>
    </form>
    )
  }
});

module.exports = ProjectIndexItem;
