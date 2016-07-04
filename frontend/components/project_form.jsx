const React = require('react');
const ProjectActions = require('../actions/project_actions');
// hashhistory to redirect
const ProjectStore = require('../stores/project_store');
const hashHistory = require('react-router').hashHistory;

const ProjectForm = React.createClass({
    getInitialState: function() {
      return {
        title: "",
        description: ""
      };
    },
    // componentDidMount: function() {
    //   this.projectListener = ProjectStore.addListener(this._handleChange)
    // },
    // componentWillUnmount: function() {
    //   this.projectListener.remove()
    // },
    // _handleChange() {
    //
    //
    // },
    tChange (e) {
      this.setState({title: e.target.value})
    },
    dChange(e) {
      this.setState({description: e.target.value})
    },
    _submit(e) {
      e.preventDefault();
      ProjectActions.createProject({title: this.state.title, description: this.state.description});
      this.setState({title: "", description: ""})
      hashHistory.push('/projects')
    },
    handleCancel (e) {
      e.preventDefault();
      this.setState({title: "", description: ""})
      hashHistory.push('/projects')
    },
    render () {
    return (
      <div className="div-proj-form">
        <form onSubmit={this._submit}>
          <h1>Create A Project!</h1>
            <label>Project Title:</label>
            <input value={this.state.title} onChange={this.tChange}></input>
            <label>Project Description:</label>
            <textarea value={this.state.description} onChange={this.dChange}></textarea>
            <input type="submit" value="Create!"></input>
            <button onClick={this.handleCancel}>Cancel</button>
        </form>
      </div>
    )
  }
})

module.exports = ProjectForm;
