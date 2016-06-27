# Flux Cycles

Flux loops are organized by data type. Under each data type, there may
be sub-categories, and each action is listed with the sequence of events
that result from its invocation, ending with the API or store. Finally,
store listeners are listed at the end.

You should be able to use this document trace an **action** starting
with where it was invoked, through the **API**/**store** involved, and
finally to the **components** that update as a result. This is important
because once you start implementing your flux loops, that's precisely
what you'll need to do.


## Project Cycles

### Projects API Request Actions

* `fetchAllProjects`
  0. invoked from `ProjectsIndex` `didMount`/`willReceiveProps`
  0. `GET /api/Projects` is called.
  0. `receiveAllProjects` is set as the callback.

* `createProject`
  0. invoked from new note button `onClick`
  0. `POST /api/Projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `fetchSingleProject`
  0. invoked from `ProjectDetail` `didMount`/`willReceiveProps`
  0. `GET /api/Projects/:id` is called.
  0. `receiveSingleProject` is set as the callback.

* `updateProject`
  0. invoked from `ProjectForm` `onSubmit`
  0. `POST /api/Projects` is called.
  0. `receiveSingleProject` is set as the callback.

* `destroyProject`
  0. invoked from delete note button `onClick`
  0. `DELETE /api/Projects/:id` is called.
  0. `removeProject` is set as the callback.

### Projects API Response Actions

* `receiveAllProjects`
  0. invoked from an API callback.
  0. `Project` store updates `_Projects` and emits change.

* `receiveSingleProject`
  0. invoked from an API callback.
  0. `Project` store updates `_Projects[id]` and emits change.

* `removeProject`
  0. invoked from an API callback.
  0. `Project` store removes `_Projects[id]` and emits change.

### Store Listeners

* `ProjectsIndex` component listens to `Project` store.
* `ProjectDetail` component listens to `Project` store.


## ProjectContainer Cycles

### ProjectContainers API Request Actions

* `fetchAllProjectContainers`
  0. invoked from `ProjectContainersIndex` `didMount`/`willReceiveProps`
  0. `GET /api/ProjectContainer` is called.
  0. `receiveAllProjectContainers` is set as the callback.

* `createProjectContainer`
  0. invoked from new ProjectContainer button `onClick`
  0. `POST /api/ProjectContainer` is called.
  0. `receiveSingleProjectContainer` is set as the callback.

* `fetchSingleProjectContainer`
  0. invoked from `ProjectContainerDetail` `didMount`/`willReceiveProps`
  0. `GET /api/ProjectContainer/:id` is called.
  0. `receiveSingleProjectContainer` is set as the callback.

* `updateProjectContainer`
  0. invoked from `ProjectContainerForm` `onSubmit`
  0. `POST /api/ProjectContainer` is called.
  0. `receiveSingleProjectContainer` is set as the callback.

* `destroyProjectContainer`
  0. invoked from delete ProjectContainer button `onClick`
  0. `DELETE /api/ProjectContainer/:id` is called.
  0. `removeProjectContainer` is set as the callback.

### ProjectContainers API Response Actions

* `receiveAllProjectContainers`
  0. invoked from an API callback.
  0. `ProjectContainer` store updates `_ProjectContainer` and emits change.

* `receiveSingleProjectContainer`
  0. invoked from an API callback.
  0. `ProjectContainer` store updates `_ProjectContainer[id]` and emits change.

* `removeProjectContainer`
  0. invoked from an API callback.
  0. `ProjectContainer` store removes `_ProjectContainer[id]` and emits change.

### Store Listeners

* `ProjectContainersIndex` component listens to `ProjectContainer` store.


## SearchSuggestion Cycles

* `fetchSearchSuggestions`
  0. invoked from `ProjectSearchBar` `onChange` when there is text
  0. `GET /api/Projects` is called with `text` param.
  0. `receiveSearchSuggestions` is set as the callback.

* `receiveSearchSuggestions`
  0. invoked from an API callback.
  0. `SearchSuggestion` store updates `_suggestions` and emits change.

* `removeSearchSuggestions`
  0. invoked from `ProjectSearchBar` `onChange` when empty
  0. `SearchSuggestion` store resets `_suggestions` and emits change.

### Store Listeners

* `SearchBarSuggestions` component listens to `SearchSuggestion` store.
