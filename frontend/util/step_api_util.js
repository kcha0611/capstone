const StepApiUtil = {
  fetchSteps (id, cb) {
    $.ajax ({
      url: `/api/projects/${id}/steps`,
      success (data) {
        cb(data)
      }
    })
  },
  createStep (project_id, data, cb) {
    data.project_id = project_id
    $.ajax({
      url: `/api/projects/${project_id}/steps`,
      method: 'POST',
      data: {step: data},
      success (res) {
        cb(res)
      }
    })
  }
}

module.exports = StepApiUtil
