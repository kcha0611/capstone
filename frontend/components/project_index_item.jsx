const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;
const SessionStore = require('../stores/session_store');
const Modal = require('react-bootstrap').Modal
const Button = require('react-bootstrap').Button;

const ProjectIndexItem = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.project.title,
      description: this.props.project.description,
      show: false
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange)
    ProjectActions.getProject(this.props.project.id)
  },
  _onChange() {
    this.setState({title: this.state.title, description: this.state.description})
  },
  hideModal() {
    this.setState({show: false})
  },
  showModal() {
    this.setState({show: true})
  },
  componentWillUnmount() {
    this.projectListener.remove()
  },
  // _edit () {
  //   hashHistory.push(`projects/${this.props.project.id}/edit`)
  // },
  // _delete () {
  //   ProjectActions.deleteProject(this.props.project.id)
  // },
  // submit (e) {
  //   e.preventDefault();
  //   ProjectActions.createProject({title: this.props.project.title, description: this.props.project.description})
  // },
  goPage () {
    // debugger
    if (SessionStore.isUserLoggedIn()) {
      hashHistory.push(`api/projects/${this.props.project.id}`)
    }
    else {
     this.showModal();
    }
  },
  render () {
    let hght;
    let extraBig = function () {
      let random = Math.random()
      if (random >= 0.3 && random <= 0.6) {
        return "extra-big"
        hght = 50;
      } else if (random < 0.3) {
        return "extra-tall";
        hght = 300;
      } else if (random > 0.6) {
        return "extra-tall-big"
        hght = 350;
      }
    }
    return (
      <div className="proj-div" onClick={this.goPage}>
        <ul className="proj-index-images">
            <li>
                <figure className="proj-figure">
                    <img src={this.props.project.image_url} alt="" className="proj-image"/>
                    <figcaption className="proj-item-figcap">
                        <h2>{this.props.project.title}</h2>
                        <p>{this.props.project.description}</p>
                    </figcaption>
                </figure>
            </li>
        </ul>

        <br></br>
        <Modal bsSize="large" aria-labelledby="step-modal-close" show={this.state.show} onHide={this.hideModal}>
          <Modal.Header closeButton>
            <Modal.Title>Welcome to Constructables</Modal.Title>
          </Modal.Header>
          <Modal.Body className="proj-index-item-body">
            <p className="root-modal-p">If you haven't already, please <Link to="/signup" className="root-modal-signup">SignUp</Link> to view these projects! Or just <Link to="/login" className="root-modal-login">Login!</Link></p>
          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.hideModal}>Close</Button>
          </Modal.Footer>
        </Modal>
      </div>
    )
  }
});

module.exports = ProjectIndexItem;
