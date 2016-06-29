const React = require('react');
const ProjectIndexItem = require('./project_index_item');

const ProjectIndex = {
  getInitialState: function() {
    return {
      projects: []
    };
  },
  componentDidMount: function() {
    this.projectListener = ProjectStore.addListener(this._handleChange)
    PostActions.fetchProjects();
  },
  componentDidUnMount: function () {
    this.projectListener.remove();
  },
  _handleChange () {
    this.setState({projects: PostStore.all()})
  },
  render () {
    return (
      <div>
        {this.state.projects.map((project) {
          <ProjectIndexItem project={project}>{project.title}</ProjectIndexItem>
          <ProjectIndexItem>{project.description}</ProjectIndexItem>
          });
        }
        <ProjectForm>Create Project!</ProjectForm>
      </div>
    )
  }
}
