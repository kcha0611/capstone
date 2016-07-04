const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');

const ProjectShow = React.createClass({
  getInitialState: function() {
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};
    return ({project: final})
  },
  componentDidMount: function() {
    // debugger
    this.projectListener = ProjectStore.addListener(this._handleChange)
  },
  componentWillUnmount: function () {
    this.projectListener.remove()
  },
  _handleChange() {
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};
    this.setState({ project: final})
  },
  _delete () {
    ProjectActions.deleteProject(parseInt(this.props.params.projectId))
    hashHistory.push('/projects')
  },
  render () {
    // debugger
    // if (this.state.project === undefined) {
    //   return;
    // }
    return (
      <div>
        <img src={`${this.state.project.image_url}`} className="show-image"></img>
        <h1 className="show-title">{this.state.project.title}</h1>
        <p className="show-description">{this.state.project.description}</p>
        <button onClick={this._delete}>Delete</button>
      </div>
    )
  }
})

module.exports = ProjectShow;
