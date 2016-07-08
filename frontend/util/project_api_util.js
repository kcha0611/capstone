module.exports = {
  fetchAllProjects(cb) {
    $.ajax({
      url: '/api/projects',
      method: "GET",
      success (data) {
        cb(data)
      }
    })
  },
  fetchSearchedProjects (data, cb) {
    $.ajax ({
      url: 'api/projects',
      data: data,
      success (res) {
        cb(res)
      }
    })
  },
  getProject (id, cb) {
    $.ajax ({
      url: `/#/project/${id}`,
      success (data) {
        cb(data)
      },
      error () {
        console.log("Invalid ID");
      }
    })
  },
  createProject (data, cb, stepCb) {
    $.ajax ({
      url: `api/projects`,
      method: 'POST',
      dataType: 'json',
      data: {project: data},
      success (res) {
        cb(res)
        stepCb(res)
      }
      // error () {
      //   console.log("Field is blank!");
      // }
    })
  },
  updateProject (data, cb) {
    $.ajax({
      url: `/#/projects/${data.id}`,
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
      url: `/#/projects/${id}`,
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
