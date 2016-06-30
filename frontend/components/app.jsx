const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectIndex = require('./project_index')

const App = React.createClass({
  handleLogOut() {
    debugger
    SessionActions.logOut();
  },
  page() {
    if (SessionStore.isUserLoggedIn()) {
      // debugger
    	return (
    		<hgroup className="root-header-group">
    			<h2 className="root-header-name">Hi, {SessionStore.currentUser().username}!</h2>
    			<input type="submit" value="logout" onClick={ this._handleLogOut } />
    		</hgroup>
    	);
    } else if ( !["/login", "/signup"].includes(this.props.location.pathname) ) {
      return (
        <nav className="login-signup">
          <Link to="/login" activeClassName="current">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" activeClassName="current">Sign up!</Link>
          <br></br>
          <br></br>
          <ProjectIndex></ProjectIndex>
        </nav>
      );
    }
  },

  render() {
    return (
      <div>
        <header>
          <Link to="/" className="root-header-link"><h1>Constructables</h1></Link>
          { this.page() }
        </header>
        {this.props.children}
      </div>
    );
  }
})

module.exports = App;
