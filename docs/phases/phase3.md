# Phase 3: ProjectContainers and Tags (2 days)

## Rails
### Models
* ProjectContainer
* Tag
* Tagging

### Controllers
* Api::ProjectContainersController (create, destroy, index, show, update)
* Api::CommentContainersController (create, destroy, index, show, update)

### Views
* ProjectContainer/index.json.jbuilder
* ProjectContainer/show.json.jbuilder
* comments/show.json.jbuilder

## Flux
### Views (React Components)
* ProjectContainersIndex
  - ProjectContainerIndexItem
* ProjectContainerForm
* CommentContainersIndex
  - CommentContainerIndexItem
* CommentContainerForm
* SearchIndex

### Stores
* ProjectContainer
* CommentContainer

### Actions
* ApiActions.receiveAllProjectContainers -> triggered by ApiUtil
* ApiActions.receiveSingleProjectContainer
* ApiActions.deleteProjectContainer
* ProjectContainerActions.fetchAllProjectContainers -> triggers ApiUtil
* ProjectContainerActions.fetchSingleProjectContainer
* ProjectContainerActions.createProjectContainer
* ProjectContainerActions.editProjectContainer
* ProjectContainerActions.destroyProjectContainer


### ApiUtil
* ApiUtil.fetchAllProjectContainers
* ApiUtil.fetchSingleProjectContainer
* ApiUtil.createProjectContainer
* ApiUtil.editProjectContainer
* ApiUtil.destroyProjectContainer


## Gems/Libraries
