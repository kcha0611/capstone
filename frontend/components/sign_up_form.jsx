const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;

const SignUpForm = React.createClass({
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
	    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
	  },

	  componentWillUnmount() {
	    this.sessionListener.remove();
	  },

	  redirectIfLoggedIn() {
	    if (SessionStore.isUserLoggedIn()) {
	      this.context.router.push("/");
	    }
	  },
		handleSubmit(e) {
			e.preventDefault();

			const loginInfo = {username: this.state.username, password: this.state.password};
			SessionActions.signUp(loginInfo);
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
			if (this.formType() === "signup") {
				navLink = <Link to="/login">login</Link>
			}
			else {
				navLink = <Link to="/signup">sign up</Link>
			}
			return (
			<div>
				<form className="signup-form-comp" onSubmit={this.handleSubmit}>
					<h1>Constructables</h1>
					<br></br>
					<h2>Welcome!</h2>
					<br></br>
					<h3>Please Sign Up!</h3>
						<br></br>
						<br></br>
					Already a user? {navLink}!
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
					<button type="submit" value="submit">Submit</button>
				</form>
			</div>
		)
	}
});

module.exports = SignUpForm;
