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
			this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this));
	    this.sessionListener = SessionStore.addListener(this.logged_in_redirect);
	  },

	  componentWillUnmount() {
			// debugger
			this.errorListener.remove();
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
			// debugger
			const loginInfo = {username: this.state.username, password: this.state.password};
	    if (this.formType() === "login") {
				SessionActions.logIn(loginInfo)
			}
			else {
				SessionActions.signUp(loginInfo)
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
		fieldErrors(field) {

	    const errors = ErrorStore.formErrors(this.formType());
			// debugger
			// console.log(errors);
	    if (!errors[field]) { return; }

	    const messages = errors[field].map( (errorMsg, i) => {
	      return <li key={ i }>{ errorMsg }</li>;
	    });

	    return <ul>{ messages }</ul>;
  	},
 		render () {
			let navLink;
			let greet;
			let _confirmPass;
			let _passInput;
			if (this.formType() === "login") {
				navLink = <Link to="/signup">sign up</Link>
				greet = <div className="greet-signup">New to Constructables? Please {navLink}</div>
			}
			else {
				navLink = <Link to="/login">login</Link>
				greet = <div className="greet-signup">Already a User? Please {navLink}</div>

				_confirmPass = <div>Confirm Password: </div>
				_passInput = <input type="password" value={this.state.password} onChange={this.passwordUpdate}></input>
			}
			let capitalized = this.formType().charAt(0).toUpperCase() + this.formType().slice(1);
			return (
			<div>
				<form className="login-form-comp" onSubmit={this.handleSubmit}>
					<h2 className="h2-login-form">Discover</h2>
					<h3 className="h3-login-form">{capitalized}</h3>
						{this.fieldErrors("base")}
					{greet}
					<div className="login-input">
						<label className="formfield">
							Username:
							{this.fieldErrors("username")}
							<input type="text" value={this.state.username} onChange={this.uNameUpdate}></input>
						</label>
						<label className="formField form-password">
							Password:
							{this.fieldErrors("password")}
							<input type="password" value={this.state.password} onChange={this.passwordUpdate}></input>
							{_confirmPass}
							{_passInput}
						</label>
						<input type="submit" value={this.formType()} className="submit-button"/>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = LoginForm;
