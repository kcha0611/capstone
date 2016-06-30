const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const LoginForm = React.createClass({
	contextTypes: {
			router: React.PropTypes.object.isRequired
		},

	  getInitialState() {
	    return {
	      username: "",
	      password: ""
	    };
	  },

	  componentDidMount() {
	    this.sessionListener = SessionStore.addListener(this.logged_in_redirect);
	  },

	  componentWillUnmount() {
	    this.sessionListener.remove();
			// hashHistory.push('/login')

	  },

	  logged_in_redirect() {
	    if (SessionStore.isUserLoggedIn()) {
	      this.context.router.push("/");
	    }
	  },
		handleSubmit(e) {
			e.preventDefault();

			const loginInfo = {username: this.state.username, password: this.state.password};
	    SessionActions.logIn(loginInfo);
		},
		passwordUpdate (e) {
			this.setState({password: e.target.value})
		},
		uNameUpdate (e) {
			this.setState({username: e.target.value})
		},
		formType () {
			return this.props.location.pathname.slice(1)
		},
 		render () {
			let navLink;
			if (this.formType() === "login") {
				navLink = <Link to="/signup">sign up</Link>
			}
			else {
				navLink = <Link to="/login">login</Link>
			}
			let capitalized = this.formType().charAt(0).toUpperCase() + this.formType().slice(1);
			return (
			<div>
				<form className="login-form-comp" onSubmit={this.handleSubmit}>
					<h1>Constructables</h1>
					<br></br>
					<br></br>
					<h2>Learn Something New!</h2>
						<br></br>
						<br></br>
					<h3>Please {capitalized}</h3>
					<br></br>
					New? Please {navLink}
					<br></br>
						<br></br>
					<div>
						<label>
							Username:
							<input type="text" value={this.state.username} onChange={this.uNameUpdate}></input>
						</label>
						<br></br>
						<br></br>
						<label>
							Password:
							<input type="password" value={this.state.password} onChange={this.passwordUpdate}></input>
						</label>
					</div>
					<br></br>
					<br></br>
					<button type="submit">Login!</button>
				</form>
			</div>
		)
	}
});

module.exports = LoginForm;
