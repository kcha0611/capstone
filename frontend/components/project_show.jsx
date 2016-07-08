const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const StepActions = require('../actions/step_actions');
const StepStore = require('../stores/step_store');
const StepIndexItem = require('./step_index_item')
const Media = require('react-bootstrap').Media
const ProjectShow = React.createClass({
  getInitialState: function() {
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};
    return ({project: final, steps: []})
  },
  componentDidMount: function() {
    // debugger
    this.projectListener = ProjectStore.addListener(this._handleChange)
    this.stepListener = StepStore.addListener(this._handleChange)
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};
    StepActions.fetchAllSteps(final.id);
    // debugger
  },
  componentWillUnmount: function () {
    this.projectListener.remove()
    this.stepListener.remove()
  },
  _handleChange() {
    let potential = ProjectStore.find(parseInt(this.props.params.projectId))
    let final = potential ? potential : {};

    this.setState({ project: final, steps: StepStore.all()})
  },
  _delete () {
    ProjectActions.deleteProject(parseInt(this.props.params.projectId))
    hashHistory.push('/projects')
  },
  render () {
    // debugger
    // console.log(this.state.steps);
    let url = this.state.project.image_url
    return (
      <div>
        <h1 className="show-title">{this.state.project.title}</h1>
        <div id="show-desc-img">
        <img src={`${this.state.project.image_url}`} className="show-image" alt="" width="855" height="923"></img>
        </div>
        <ul>
          {this.state.steps.map ((step) =>
            <label>{`Phase ${step.order}`}
              <StepIndexItem step={step} key={step.id}/>
            </label>
            )
          }
        </ul>
        <button onClick={this._delete}>Delete</button>
      </div>
    )
  }
})

module.exports = ProjectShow;
