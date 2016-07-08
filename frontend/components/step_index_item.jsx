const StepsIndex = require('./steps_index')
const React = require('react')

const StepIndexItem = React.createClass({
  render () {
    return (
      <div className="step-index-item">
        <h1 className="step-index-h1">{`Phase ${this.props.step.order}:`}</h1>
        <h2 className="step-index-h2">Title:</h2>
        <a className="step-index-title">{this.props.step.title}</a>
        <h3 className="step-index-h3">Description:</h3>
        <p className="step-index-description">{this.props.step.description}</p>
      </div>
    )
  }
})

module.exports = StepIndexItem
