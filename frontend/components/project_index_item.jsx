const React = require('react');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const Link = require('react-router').Link;
const hashHistory = require('react-router').hashHistory;

const ProjectIndexItem = React.createClass({
  getInitialState: function() {
    return {
      title: this.props.project.title,
      description: this.props.project.description
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._onChange)
    ProjectActions.getProject(this.props.project.id)
  },
  _onChange() {
    this.setState({title: this.state.title, description: this.state.description})
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
    hashHistory.push(`api/projects/${this.props.project.id}`)
  },
  render () {
    return (
      <div className="proj-div" onClick={this.goPage}>
        <ul className="proj-index-images">
            <li>
                <figure>
                    <img src={this.props.project.image_url} alt="" className="proj-image"/>
                    <figcaption className="proj-item-figcap">
                        <h2>{this.props.project.title}</h2>
                        <p>{this.props.project.description}</p>
                    </figcaption>
                </figure>
            </li>
        </ul>

        <br></br>
      </div>
    )
  }
});

module.exports = ProjectIndexItem;
