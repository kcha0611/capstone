# Constructables

[Heroku link][heroku]: https://constructrables.herokuapp.com/

[heroku]: http://www.herokuapp.com

## Minimum Viable Product

Constructables is a web application inspired by Instructables that will be built using Ruby on Rails and React.js.  By the end of Week 9, this app will, at a minimum, satisfy the following criteria:

- [ ] Hosting on Heroku
- [ ] New account creation, login, and guest/demo login
- [ ] A production README, replacing this README
- [ ] Project
  - [ ] Has detailed description on the project topic
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling
  - [ ] Has the ability to hold videos or pictures related to the topic

- [ ] ProjectContainers for organizing projects
  - [ ] Separates projects based on their topics as well as authors
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

- [ ] Comments for projects
  - [ ] Ability to comment on the projects
  - [ ] Show the comments author on the project
  - [ ] Shows how many comments specific authors have written and also shows all of the comments you post on your page

- [ ] Rich Text Editing of projects
  - [ ] Smooth, bug-free navigation
  - [ ] Adequate seed data to demonstrate the site's features
  - [ ] Adequate CSS styling

## Design Docs
* [View Wireframes][views]
* [React Components][components]
* [Flux Cycles][flux-cycles]
* [API endpoints][api-endpoints]
* [DB schema][schema]

[views]: docs/views.md
[components]: docs/components.md
[flux-cycles]: docs/flux-cycles.md
[api-endpoints]: docs/api-endpoints.md
[schema]: docs/schema.md

## Implementation Timeline

### Phase 1: Backend setup and Front End User Authentication (1 day, W1 Tu 6pm)

**Objective:** Functioning rails project with Authentication

- [ ] create new project
- [ ] create `User` model
- [ ] authentication
- [ ] user signup/signin pages
- [ ] blank landing page after signin

### Phase 2: Project Model, API, and basic APIUtil (1.5 days, W1 Th 12pm)

**Objective:** Project can be created, read, edited and destroyed through
the API.

- [ ] create `Project` model
- [ ] seed the database with a small amount of test data
- [ ] CRUD API for projects (`ProjectController`)
- [ ] jBuilder views for projects
- [ ] setup Webpack & Flux scaffold
- [ ] setup `APIUtil` to interact with the API
- [ ] test out API interaction in the console.

### Phase 3: Flux Architecture and Router (1.5 days, W1 F 6pm)

**Objective:** Project can be created, read, edited and destroyed with the
user interface.

- [ ] setup the flux loop with skeleton files
- [ ] setup React Router
- implement each note component, building out the flux loop as needed.
  - [ ] `ProjectIndex`
  - [ ] `ProjectIndexItem`
  - [ ] `ProjectForm`
- [ ] save Project to the DB when the form loses focus or is left idle
  after editing.

### Phase 4: Start Styling (0.5 days, W2 M 12pm)

**Objective:** Existing pages (including signup/signin) will look good.

- [ ] create a basic style guide
- [ ] position elements on the page
- [ ] add basic colors & styles

### Phase 5: ProjectContainers (1 day, W2 Tu 12pm)

**Objective:** Project belong to ProjectContainers, and can be viewed by projectcontainer.

- [ ] create `Projectbook` model
- build out API, Flux loop, and components for:
  - [ ] Projectcontainer CRUD
  - [ ] adding projects requires a projectcontainer
  - [ ] moving projects to a different projectcontainer
  - [ ] viewing projects by projectcontainer
- Use CSS to style new views

Phase 3 adds organization to the Project. Project belong to a Projectbook,
which has its own `Index` view.

### Phase 6: Comments (1 days, W2 Th 12pm)

**Objective:** Project can be commented on with multiple comments, and projects are searchable by keyword.

- [ ] create `Tag` model and join table
- build out API, Flux loop, and components for:
  - [ ] fetching comments for projectcontainer
  - [ ] adding comments to projectcontainer
  - [ ] creating comments while adding to projectcontainers
  - [ ] searching projectcontainers by tag
- [ ] Style new elements

### Phase 7: Allow Complex Styling in Project (0.5 days, W2 Th 6pm)

**objective:** Enable complex styling of projects.

- [ ] Integrate `react-quill` (based on Quill.js).
- [ ] Use Rails helpers to sanitize HTML before rendering.
- [ ] Style the new Quill elements.

### Phase 8: Styling Cleanup and Seeding (1 day, W2 F 6pm)

**objective:** Make the site feel more cohesive and awesome.

- [ ] Get feedback on my UI from others
- [ ] Refactor HTML classes & CSS rules
- [ ] Add modals, transitions, and other styling flourishes.

### Bonus Features (TBD)
- [ ] Search through projects for blocks of text
- [ ] Pagination / infinite scroll for Project Index
- [ ] Set reminders on projects
- [ ] Changelogs for Project
- [ ] Multiple sessions

[phase-one]: docs/phases/phase1.md
[phase-two]: docs/phases/phase2.md
[phase-three]: docs/phases/phase3.md
[phase-four]: docs/phases/phase4.md
[phase-five]: docs/phases/phase5.md
