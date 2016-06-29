module.exports = {
  // fetchComments (cb) {
  //   $.ajax({
  //     url: `api/comments`
  //   })
  // },
  // getComment (id, cb) {
  //   $.ajax({
  //     url: `api/comment/${id}`,
  //     success (data) {
  //       cb(data)
  //     }
  //   })
  // },
  createComment (comment, cb) {
    $.ajax({
      url: `api/comments`,
      method: 'POST',
      data: {comment},
      success (data) {
        cb(data)
      },
      error () {
        console.log("Invalid Credentials");
      }
    })
  },
  editComment (comment, cb) {
    $.ajax({
      url: `api/comment/${comment.id}`,
      method: 'PATCH',
      data: {comment},
      success (data) {
        cb(data)
      },
      error () {
        console.log("Cannot Make Changes");
      }
    })
  },
  deleteComment (id, cb) {
    $.ajax({
      url: `api/comment/${id}`,
      method: 'DELETE',
      success (data) {
        cb(data)
      },
      error () {
        console.log("Cannot Delete");
      }
    })
  }
}
