# Phase 2: Flux Architecture and Project CRUD (2 days)

## Rails
### Models

### Controllers

### Views

## Flux
### Views (React Components)
* ProjectIndex
  - ProjectIndexItem
* ProjectForm

### Stores
* Project

### Actions
* ApiActions.receiveAllProject -> triggered by ApiUtil
* ApiActions.receiveSingleProject
* ApiActions.deleteProject
* ProjectActions.fetchAllProject -> triggers ApiUtil
* ProjectActions.fetchSingleProject
* ProjectActions.createProject
* ProjectActions.editProject
* ProjectActions.destroyProject

### ApiUtil
* ApiUtil.fetchAllProject
* ApiUtil.fetchSingleProject
* ApiUtil.createProject
* ApiUtil.editProject
* ApiUtil.destroyProject

## Gems/Libraries
* Flux Dispatcher (npm)
* Twitter Bootstrap
