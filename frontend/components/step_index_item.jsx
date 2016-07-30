const StepsIndex = require('./steps_index')
const React = require('react')
const Media = require('react-bootstrap').Media
const Image = require('react-bootstrap').Image;
const Modal = require('react-bootstrap').Modal;
const Button = require('react-bootstrap').Button;

const StepIndexItem = React.createClass({
  getInitialState: function() {

    return {
      title: this.props.step.title,
      description: this.props.step.description,
      order: this.props.step.order,
      image_url: this.props.step.image_url,
      show: false
    };
  },
  // componentDidMount: function() {
  //   this.stepListener = StepStore.addListener(this._onChange)
  // },
  // componentWillUnmount: function () {
  //   this.stepListener.remove()
  // },
  // _onChange() {
  //   this.setState({title: this.state.title, description: this.state.description, order: this.state.order, image_url: this.state.image_url})
  // },
  showModal() {
    this.setState({show: true})
  },
  hideModal() {
    this.setState({show: false})
  },
  render () {
    // debugger
    return (
      // <div className="step-index-item">
      //   <h1 className="step-index-h1">{`Phase ${this.state.order}:`}</h1>
      //   <h2 className="step-index-h2">Title:</h2>
      //   <a className="step-index-title">{this.state.title}</a>
      //   <h3 className="step-index-h3">Description:</h3>
      //   <p className="step-index-description">{this.state.description}</p>
      //   <img src={this.state.image_url}></img>
      // </div>
      // <Media>
      //   <Media.Left>
      //     <img src={this.state.image_url} width={300} height={200} alt="Image"></img>
      //   </Media.Left>
      //   <Media.Body>
      //     <Media.Heading className="step-index-h1">
      //       {`Phase ${this.state.order}:`}
      //     </Media.Heading>
      //     <Media.Heading className="step-index-h2">
      //       Title: {this.state.title}
      //     </Media.Heading>
      //     <p className="step-index-description">
      //       Description: {this.state.description}
      //     </p>
      //   </Media.Body>
      // </Media>
      // <div className="step-div-wrap">
      //   <Media className="step-index-media">
      //      <Media.Left align="top">
      //        <img width={400} height={280} src={this.state.image_url} alt="Image" className="step-thbnail-img"/>
      //      </Media.Left>
      //      <Media.Body>
      //        <div className="step-index-div"><Media.Heading className="step-index-h1">{`Phase ${this.state.order}: ${this.state.title}`}</Media.Heading></div>
      //        <p className="step-index-description">Description: {this.state.description}</p>
      //      </Media.Body>
      //   </Media>
      // </div>
      <div className="parent-step-div">
        <p className="step-img-phase">{`Phase ${this.state.order}`}</p>
        <img src={this.state.image_url} onClick={this.showModal} className="show-image"></img>
      <Modal bsSize="large" aria-labelledby="step-modal-close" show={this.state.show} onHide={this.hideModal}>
        <Modal.Header closeButton>
          <Modal.Title id="step-modal-title">{`Phase ${this.state.order}`}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2>{this.state.title}</h2>
          <p>{this.state.description}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>
    </div>
    )
  }
})

module.exports = StepIndexItem
