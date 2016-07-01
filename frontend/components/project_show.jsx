const React = require('react');
const ProjectStore = require('../stores/project_store');

const ProjectShow = React.createClass({
  getInitialState: function() {
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};
    return ({project: final})
  },
  componentDidMount: function() {
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
  render () {
    debugger
    return (
      <div>
        {this.state.project.description}
      </div>
    )
  }
})

module.exports = ProjectShow;
