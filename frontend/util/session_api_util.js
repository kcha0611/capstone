const SessionApiUtil = {
  logIn (user, success, error) {
    $.ajax({
      url: 'api/session',
      data: {user},
      success,
      error (xhr) {
        console.log("Invalid Creds");
      }
    })
  },
  logOut (success) {
    $.ajax ({
      url: 'api/session',
      method: 'DELETE',
      success,
      error () {
        console.log("Logout Failed");
      }
    })
  },
  signUp (user, success, error) {
    $.ajax ({
      url: 'api/user',
      method: 'POST',
      data: {user},
      success,
      error (xhr) {
        console.log("Invalid field");
      }
    })
  },
  fetchCurrentUser(success, complete) {
    $.ajax ({
      url: 'api/user',
      success,
      error (xhr) {
        console.log("Error fetching User");
      }
    })
  }
}

module.exports = SessionApiUtil
