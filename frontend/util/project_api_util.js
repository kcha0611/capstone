module.exports = {
  fetchAllProjects(cb) {
    $.ajax({
      url: 'api/projects',
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
      url: `api/projects`,
      method: 'POST',
      data: {data},
      success (res) {
        cb(res)
      }
      error () {
        console.log("Field is blank!");
      }
    })
  },
  deleteProject (id, cb) {
    $.ajax ({
      url: `api/projects/${id}`,
      method: 'DELETE',
      success(data) {
        cb(data)
      }
      error () {
        console.log("Invalid ID");
      }
    })
  }
}
