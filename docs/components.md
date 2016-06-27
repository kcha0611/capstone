## Component Hierarchy

**Bolded** components are associated with routes.

(:exclamation: Remember, the bolded components are created by their
associated routes, so the nesting of your bolded components must
_**exactly**_ match the nesting of your routes.)

* **App**
  * ProjectContainerIndex
    * Search
    * ProjectContainerIndexItem
    * ProjectContainerForm
  * **ProjectsIndex**
    * ProjectForm
    * ProjectIndexItem
    * **ProjectDetail**
      * ProjectTags
      * ProjectEditArea


## Routes

* **component:** `App` **path:** `/`
  * **component:** `ProjectsIndex` **path:** index
  * **component:** `ProjectsIndex` **path:** `ProjectContainers/:ProjectContainerId`
    * **component:** `ProjectDetail` **path:** `Projects/:ProjectId`
  * **component:** `ProjectsIndex` **path:** none
    * **component:** `ProjectDetail` **path:** `Projects/:ProjectId`

For Routes that have no `ProjectContainerId`, `ProjectsIndex` will render all
notes.
