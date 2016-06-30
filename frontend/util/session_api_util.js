const SessionApiUtil = {
  logIn (user, success, error) {
    $.ajax({
      url: '/api/session',
      data: {user},
      method: 'POST',
      success,
      error () {
        console.log("Invalid Creds");
      }
    })
  },
  logOut (success) {
    debugger
    $.ajax ({
      url: '/api/session',
      method: 'DELETE',
      success,
      error () {
        console.log("Logout Failed");
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
      error () {
        console.log("Invalid field");
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
