# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

### Users

- `GET /users/new`
- `POST /users`
- `PATCH /users`

### Session

- `GET /session/new`
- `POST /session`
- `DELETE /session`

## JSON API

### Notes

- `GET /api/project`
  - Notes index/search
  - accepts `comment_name` query param to list project by comment
  - accepts pagination params (if I get there)
- `POST /api/project`
- `GET /api/project/:id`
- `PATCH /api/project/:id`
- `DELETE /api/project/:id`

### Notebooks

- `GET /api/projectcontainer`
- `POST /api/projectcontainer`
- `GET /api/projectcontainer/:id`
- `PATCH /api/projectcontainer/:id`
- `DELETE /api/projectcontainer/:id`
- `GET /api/projectcontainer/:id/project`
  - index of all project for a projectcontainer
  - accepts featured project params (maybe)
  - accepts categories for projects (maybe)
### Tags

- A project's comment will be included in the project show template
- `GET /api/comment`
  - includes query param for typeahead suggestions
- `POST /api/project/:project_id/comment`: add comment to project by name
  - if project doesn't already exist, it will be created
- `DELETE /api/project/:project_id/comment/:comment_name`: remove comment from project by
  name
