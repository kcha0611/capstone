const React = require('react');

const ProjectIndexItem = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.project.title,
      description: this.props.project.description
    };
  },
  componentDidMount: function() {
    this.projectListener(this._onChange)
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
  render () {
    return (
      <div>
        <input value={this.props.project.title}></input>
        <input value={this.props.project.description}></input>
        <br></br>
        <br></br>
        <button onClick={this._edit}>Edit!</button>
        <button onClick={this._delete}>Delete!</button>
      </div>
    )
  }
});

module.exports = ProjectIndexItem;
