const React = require('react')
const StepStore = require('../stores/step_store')
const StepActions = require('../actions/step_actions')
const StepIndexItem = require('./step_index_item')

const StepsIndex = React.createClass({
  getInitialState: function() {
    return {
      steps: []
    };
  },
  componentDidMount: function() {
    this.stepListener = StepStore.addListener(this._onChange)
    StepActions.fetchAllSteps(parseInt(this.props.projectId))
  },
  _onChange () {
    this.setState({steps: StepStore.all()})
  },
  render () {
    // debugger
    return (
      <div className="div-stepind-wrap">
        {this.state.steps.map ((step) => {
          return <StepIndexItem step={step}/>
        })
      }
      </div>
    )
  }
})


module.exports = StepsIndex
