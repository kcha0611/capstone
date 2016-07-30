const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const StepActions = require('../actions/step_actions');
const StepStore = require('../stores/step_store');
const StepIndexItem = require('./step_index_item')
const Media = require('react-bootstrap').Media
const Thumbnail = require('react-bootstrap').Thumbnail
const Col = require('react-bootstrap').Col
const Row = require('react-bootstrap').Row

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
  //   // debugger
  //   // console.log(this.state.steps);
  //   let url = this.state.project.image_url
  //   return (
  //     <div className="proj-show-div">
  //       <h1 className="show-title">{this.state.project.title}</h1>
  //       <div id="show-desc-img">
  //       <img src={`${this.state.project.image_url}`} className="show-image" alt="" width="855" height="923"></img>
  //       </div>
  //       <ul>
  //         {this.state.steps.map ((step) =>
  //             <StepIndexItem step={step} key={step.id}/>
  //
  //           )
  //         }
  //       </ul>
  //       <button onClick={this._delete}>Delete</button>
  //     </div>
  //   )
  // }
    return (
    <div className="proj-show-wrap">
      <Col xs={14} md={11} className="show-col">
        <Thumbnail src={this.state.project.image_url} className="thumbnail-proj-show">
          <section className="section-proj-show">
              <section><h3 className="show-title">{this.state.project.title}</h3></section>
              <section><p className="show-description">{this.state.project.description}</p></section>
          </section>
        </Thumbnail>
        <div className="step-index-wrap">
          {this.state.steps.map ((step) => {
            return <StepIndexItem step={step} key={step.id}></StepIndexItem>
          })
        }
        </div>
      </Col>
    </div>
    )
  }
})

module.exports = ProjectShow;
// <Media>
//      <Media.Left align="top">
//        <img width={800} height={700} src={this.state.project.image_url} alt="Image" className="show-image"/>
//      </Media.Left>
//      <Media.Body>
//        <Media.Heading className="show-title">{this.state.project.title}</Media.Heading>
//        <p className="show-description">Summary: {this.state.project.description}</p>
//      </Media.Body>
//      {this.state.steps.map ((step) =>
//        <StepIndexItem step={step}></StepIndexItem>
//      )
//    }
//    </Media>
