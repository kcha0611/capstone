const React = require('react');
const ProjectIndexItem = require('./project_index_item');
const ProjectStore = require('../stores/project_store');
const ProjectActions = require('../actions/project_actions');
const hashHistory = require('react-router').hashHistory;
const ReactRouter = require('react-router');
const ProjectForm = require('./project_form');
const Masonry = require('react-masonry-component');

const ProjectIndex = React.createClass({
  getInitialState: function() {
    return {
      projects: {}
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._handleChange)
    // debugger
    ProjectActions.fetchAllProjects();
  },
  componentWillUnmount: function () {
    this.projectListener.remove();
  },
  _handleChange () {
    this.setState({projects: ProjectStore.all()})
  },
  render () {
    let _projects = [];
    const masonryOptions = {
      fitWidth: true,
      gutter: 10
    }
		if (this.state.projects) {
			let projectKeys = Object.keys(this.state.projects);
			projectKeys.every( (key) => {
				let project = this.state.projects[key];
				let _project = (
					<ProjectIndexItem project={project} key={project.id} />
				);
				_projects.push(_project);
				_project.length > 100 ? false : true
			});
		}
    // debugger
    return (
        <Masonry
            className={'my-gallery-class'}
            elementType={'ul'}
            options={masonryOptions}>
            {_projects}
        </Masonry>
    )
  }
})
module.exports = ProjectIndex;



// {projectKeys.map ((key) => {
//   return <ProjectIndexItem project={this.state.projects[key]} key={key} size={500}></ProjectIndexItem>
// })
// }let projectKeys = Object.keys(this.state.projects);
// let _projects = []
// let masonryOptions = {
//   gutter: 10,
//   fitWidth: true
// }
// projectKeys.map ((key) => {
//   if (_projects.length > 25) {
//     return;
//   }
//   return _projects.push(<ProjectIndexItem className="proj-image" size={600} project={projectKeys[key]} key={projectKeys[key].id}></ProjectIndexItem>)
// })
