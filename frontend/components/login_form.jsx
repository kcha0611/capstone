const React = require('react');
const Link = require('react-router').Link;
const SessionActions = require('../actions/session_actions');
const SessionStore = require('../stores/session_store');
const ErrorStore = require('../stores/error_store');

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

			const formData = {
				username: this.state.username,
				password: this.state.password
			};

	    if (this.props.location.pathname === "/login") {
	      SessionActions.logIn(formData);
	    } else {
	      SessionActions.signUp(formData);
	    }
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
			return (
			<div>
				<form className="login-form-comp" onSubmit={this.handleSubmit}>
					<h1>Constructables</h1>
					Learn Something New!
						<br></br>
						<br></br>
					Please {this.formType()} or {navLink}
						<br></br>
					<div>
						<label>
							Username:
							<input type="text" value={this.state.username} onChange={this.uNameUpdate}></input>
						</label>
						<br></br>
						<label>
							Password:
							<input type="password" value={this.state.passowrd} onChange={this.passwordUpdate}></input>
						</label>
					</div>
					<button type="submit">Login!</button>
					<button type="submit">Cancel</button>
				</form>
			</div>
		)
	}
});

module.exports = LoginForm;
