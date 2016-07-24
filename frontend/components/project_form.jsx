const React = require('react');
const ProjectActions = require('../actions/project_actions');
// hashhistory to redirect
const ProjectStore = require('../stores/project_store');
const hashHistory = require('react-router').hashHistory;
const StepForm = require('./step_form')
const Images = require('./image_uploader')
// const cloudinary = require('cloudinary');
const Button = require('react-bootstrap').Button

let phase = 0;

const ProjectForm = React.createClass({
    getInitialState: function() {
      return {
        title: "",
        description: "",
        image_url: ""
      };
    },
    tChange (e) {
      this.setState({title: e.target.value})
    },
    dChange(e) {
      this.setState({description: e.target.value})
    },
    _submit(e) {
      e.preventDefault();
      // debugger
      ProjectActions.createProject({title: this.state.title, description: this.state.description, image_url: this.state.image_url}, this.addStep);
      this.setState({title: "", description: "", image_url: ""})
      // render () {return (<StepForm></StepForm>)}
    },
    handleCancel (e) {
      e.preventDefault();
      this.setState({title: "", description: ""})
      hashHistory.push('/projects')
    },
    updateImage(e) {
      e.preventDefault();
      cloudinary.openUploadWidget(cloudinary_options, function(error, results){
       if (!error) {
         let newUrl = results[0].url
          this.setState({ image_url: newUrl });
        }
      }.bind(this));
    },
    addStep (project) {
      hashHistory.push(`projects/${project.id}/steps/new`)
    },
    render () {
    return (
      <div className="div-proj-form">
        <div className="inner-div-form">
        <h1 className="proj-form-title">Create a Project</h1>
        <form onSubmit={this._submit} className="project-form">
        <ul className="proj-form-fields">
            <li><label className="project-title">Project Title<span className="required">*</span></label><input type="text" name="field1" className="proj-title" placeholder="Title"onChange={this.tChange} /></li>
            <li>
                <label className="project-summary">Summary<span className="required">*</span></label>
                <input type="text" name="field3" className="proj-summary" placeholder="Summary" onChange={this.dChange}/>
            </li>
            <li className="additional-field">
                <button onClick={this.updateImage} className="image-class">Upload an Image!</button>
            </li>

        </ul> <div className="form-btn-div">
              <input className="form-create-button" type="submit" value="Create"/>
              </div>
        </form>
        </div>
      </div>
    )
  }
})

module.exports = ProjectForm;



// <li>
//     <label className="project-subject">Subject<span className="required">*</span></label>
//     <select name="field4" className="field-select">
//     <option value="Technology">Technology</option>
//     <option value="Cooking">Cooking</option>
//     <option value="Outdoor">Outdoor</option>
//     <option value="Craft">Craft</option>
//     <option value="Home">Home</option>
//     <option value="Costumes">Costumes</option>
//     <option value="Workshop">Workshop</option>
//     </select>
// </li>
