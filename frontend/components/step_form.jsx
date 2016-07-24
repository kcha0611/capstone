const React = require('react');
const ProjectActions = require('../actions/project_actions')
const hashHistory = require('react-router').hashHistory
const StepActions = require('../actions/step_actions');
const StepsIndex = require('./steps_index');
const StepCarousel = require('./step-carousel');

const StepForm = React.createClass({
  getInitialState: function() {
    return {
      description: "",
      title: "",
      image_url: "",
      order: 1
    };
  },
  tChange (e) {
    this.setState({title: e.target.value})
  },
  dChange(e) {
    this.setState({description: e.target.value})
  },
  updateImage(e) {
    e.preventDefault();
    cloudinary.openUploadWidget(cloudinary_options, function(error, results){
      // debugger
     if (!error) {
       let newUrl = results[0].url
        this.setState({ image_url: newUrl });
        // debugger
      }
    }.bind(this));
  },
  addPhase (e) {
    e.preventDefault();
    this.state.order = this.state.order + 1
    this.setState({title: this.state.title, description: this.state.description, order: this.state.order, image_url: this.state.image_url})
    StepActions.createStep(this.props.params.projectId, {description: this.state.description, title: this.state.title, image_url: this.state.image_url, order: this.state.order})
    this.setState({title: "", description: ""})
  },
  _submit(e) {img>
    e.preventDefault();
    // debugger
    hashHistory.push(`api/projects/${this.props.params.projectId}`)
  },
  viewPhases() {
    return (<StepCarousel></StepCarousel>)
  },
  render () {
    // debugger
    if (this.state.project) {
      let projectId = this.state.project.id
    }
    return (
    <div>
      <div className="step-form-div">
        <form className="project-form">
          <h1 className="proj-form-title">
            Create Phase:
          </h1>
          <h2 className="phase-order">{`Phase ${this.state.order}`}</h2>
            <ul className="form-style-1">
              <li><label className="step-form-title">Step Title<span className="step-title">*</span></label><input type="text" name="field1" className="inp-step-title" placeholder="Title"onChange={this.tChange} /></li>
              <li className="step-desc-wrap">
                  <label className="step-form-desc">Description<span className="step-summary">*</span></label>
                  <textarea type="text" name="field3" className="inp-step-desc" placeholder="Description" onChange={this.dChange}/>
              </li>
            <li className="additional-field">
                <button onClick={this.updateImage} className="image-class">Upload an Image!</button>
            </li>
        <div>
          <button onClick={this.addPhase} className="add-phase-btn">Add a Phase!</button>
        </div>
          <button onClick={this.viewPhases} className="step-create-button">View All Phases</button>
          <input type="submit" onClick={this._submit} className="step-create-button" value="Create!"></input>
          </ul>
        </form>
      </div>
    </div>
    )
  }
})

module.exports = StepForm;

        // <StepsIndex projectId={this.props.params.projectId} />
