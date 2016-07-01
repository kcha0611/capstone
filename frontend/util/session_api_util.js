const SessionApiUtil = {
  logIn (user, success, error) {
    $.ajax({
      url: '/api/session',
      data: {user},
      method: 'POST',
      success,
      error (err) {
        // debugger
        const errors = err.responseJSON
        error ("login", errors)
      }
    })
  },
  logOut (success) {
    // debugger
    $.ajax ({
      url: '/api/session',
      method: 'DELETE',
      success,
      error (err) {
        
      }
    })
  },
  signUp (user, success, error) {
    $.ajax ({
      url: `/api/users`,
      method: 'POST',
      data: {user},
      dataType: 'json',
      success,
      error (err) {
        const errors = err.responseJSON
        error ("signup", errors)
      }
    })
  },
  fetchCurrentUser(success) {
    $.ajax ({
      url: `/api/session`,
      success,
      error () {
        console.log("Error fetching User");
      }
    })
  }
}

module.exports = SessionApiUtil
