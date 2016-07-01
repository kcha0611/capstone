const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectIndex = require('./project_index')
const SessionActions = require('../actions/session_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const Navbar = require('./navbar');

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  handleLogOut() {
    // debugger
    SessionActions.logOut();
  },
  page() {
    if (SessionStore.isUserLoggedIn()) {
    	return (
    		<hgroup className="root-header-group">
    			<h2 className="root-header-name">Welcome, {SessionStore.currentUser().username}!</h2>
          <br></br>
          <br></br>


          <br></br>
    			<input type="submit" value="Logout" onClick={ this.handleLogOut } />
    		</hgroup>
    	);
    } else {
      return (
        <nav className="login-signup">
          <Link to="/login" className="temp-login">Login</Link>
          &nbsp;or&nbsp;
          <Link to="/signup" className="temp-sign-up">Sign up!</Link>
          <br></br>
          <br></br>
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
