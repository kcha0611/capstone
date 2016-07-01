module.exports = {
  fetchAllProjects(cb) {
    $.ajax({
      url: 'projects',
      method: "GET",
      success (data) {
        cb(data)
      }
    })
  },
  getProject (id, cb) {
    $.ajax ({
      url: `api/project/${id}`,
      success (data) {
        cb(data)
      },
      error () {
        console.log("Invalid ID");
      }
    })
  },
  createProject (data, cb) {
    $.ajax ({
      url: `projects`,
      method: 'POST',
      data: {data},
      success (res) {
        cb(res)
      },
      error () {
        console.log("Field is blank!");
      }
    })
  },
  updateProject (data, cb) {
    $.ajax({
      url: `api/projects/${data.id}`,
      method: 'PATCH',
      data: {data},
      success (res) {
        cb(res)
      },
      error () {
        console.log("Invalid ID");
      }
    })
  },
  deleteProject (id, cb) {
    $.ajax ({
      url: `api/projects/${id}`,
      method: 'DELETE',
      success(data) {
        cb(data)
      },
      error () {
        console.log("Invalid ID");
      }
    })
  }
}
