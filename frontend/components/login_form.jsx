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
		_demoSubmit() {
			SessionActions.logIn({ username: 'DemoUser', password: 'password'});
			hashHistory.push('/projects');
		},
		_demoLogin(e) {
			//  this.setState({
			// 	 username: "",
			// 	 password: ""
			//  });
			//  let username = "DemoUser";
			//  let usernameIndex = 0;
			//  let password = "password";
			//  let passwordIndex = 0;
			//  let interval = setInterval(() => {
			// 	 if (usernameIndex < 8) {
			// 		 this.setState({ username: `${this.state.username}` + username[usernameIndex]});
			// 		 usernameIndex++;
			// 	 } else if (passwordIndex < 8) {
			// 		 this.setState({ password: `${this.state.password}` + password[passwordIndex]});
			// 		 passwordIndex++;
			// 	 } else {
			// 		 this._demoSubmit();
			// 		 clearInterval(interval);
			// 	 }
			//  }, 75);
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
			let errorsB;
			let errorsU;
			let errorsP;
			if (this.state.username !== "DemoUser") {
				errorsB = this.fieldErrors("base");
				errorsU = this.fieldErrors("username");
				errorsP = this.fieldErrors("password");
			}
			if (this.formType() === "login") {
				navLink = <Link to="/signup" className="login-form-signup">Sign Up</Link>
				greet = <div className="greet-signup">New to Constructables? <p className="login-form-choice">Please {navLink}</p></div>
			}
			else {
				navLink = <Link to="/login" className="login-form-link">Login</Link>
				greet = <div className="greet-signup">Already a User? Please {navLink}</div>

			}
			let capitalized = this.formType().charAt(0).toUpperCase() + this.formType().slice(1);
			return (
			<div>
				<form className="login-form-comp" onSubmit={this.handleSubmit}>
					<h2 className="h2-login-form">Discover</h2>
						<h3>{greet}</h3>
					<h3 className="h3-login-form">{capitalized}</h3>
						{errorsB}
					<div className="login-input">
						<label className="formfield">
							Username:
							{errorsU}
							<input type="text" value={this.state.username} onChange={this.uNameUpdate}></input>
						</label>
						<label className="formField form-password">
							Password:
							{errorsP}
							<input type="password" value={this.state.password} onChange={this.passwordUpdate}></input>
							{_confirmPass}
						</label>
						<input type="submit" value={this.formType()} className="submit-button"/>
						<input type="submit" value="Demo" onClick={this._demoSubmit}></input>
					</div>
				</form>
			</div>
		)
	}
});

module.exports = LoginForm;
