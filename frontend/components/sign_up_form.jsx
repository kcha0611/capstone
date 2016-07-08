// const React = require('react');
// const Link = require('react-router').Link;
// const SessionActions = require('../actions/session_actions');
// const SessionStore = require('../stores/session_store');
// const ErrorStore = require('../stores/error_store');
// const ReactRouter = require('react-router');
// const hashHistory = ReactRouter.hashHistory;
//
// const SignUpForm = React.createClass({
// 	contextTypes: {
// 			router: React.PropTypes.object.isRequired
// 		},
// 	  getInitialState() {
// 	    return {
// 	      username: "",
// 	      password: ""
// 	    };
// 	  },
// 	  componentDidMount() {
// 			this.errorListener = ErrorStore.addListener(this.forceUpdate.bind(this))
// 	    this.sessionListener = SessionStore.addListener(this.redirectIfLoggedIn);
// 	  },
// 	  componentWillUnmount() {
// 			this.errorListener.remove();
// 	    this.sessionListener.remove();
// 	  },
// 	  redirectIfLoggedIn() {
// 	    if (SessionStore.isUserLoggedIn()) {
// 	      this.context.router.push("/");
// 	    }
// 	  },
// 		handleSubmit(e) {
// 			e.preventDefault();
//
// 			const loginInfo = {username: this.state.username, password: this.state.password};
// 			SessionActions.signUp(loginInfo);
// 		},
// 		passwordUpdate (e) {
// 			this.setState({password: e.target.value})
// 		},
// 		uNameUpdate (e) {
// 			this.setState({username: e.target.value})
// 		},
// 		formType () {
// 			return this.props.location.pathname.slice(1)
// 		},
// 		fieldErrors(field) {
//
// 			const errors = ErrorStore.formErrors(this.formType());
// 			// debugger
// 			// console.log(errors);
// 			if (!errors[field]) { return; }
//
// 			const messages = errors[field].map( (errorMsg, i) => {
// 				return <li key={ i }>{ errorMsg }</li>;
// 			});
//
// 			return <ul>{ messages }</ul>;
// 		},
// 		render () {
// 			let navLink;
// 			if (this.formType() === "signup") {
// 				navLink = <Link to="/login">login</Link>
// 			}
// 			else {
// 				navLink = <Link to="/signup">sign up</Link>
// 			}
// 			return (
//         <div class="form-style-5">
//             <form>
//             <fieldset>
//             <legend><span class="number">1</span> Member Info</legend>
//             <input type="text" name="field1" placeholder="Your Name *"/>
//             <input type="email" name="field2" placeholder="Your Email *"/>
//             <textarea name="field3" placeholder="About yourself"></textarea>
//             <label for="job">Interests:</label>
//             <select id="job" name="field4">
//             <optgroup label="Topics">
//               <option value="Cooking">Cooking</option>
//               <option value="Technology">Technology</option>
//               <option value="Science">Science</option>
//               <option value="WorkShop">WorkShop</option>
//               <option value="Outdoor">Outdoor</option>
//               <option value="Craft">Craft</option>
//               <option value="Costumes">Costumes</option>
//             </optgroup>
//             </select>
//             </fieldset>
//             <fieldset>
//             <legend><span class="number">2</span> Additional Info</legend>
//             <textarea name="field3" placeholder="About Your School"></textarea>
//             </fieldset>
//             <input type="submit" value="Apply" />
//             </form>
//   </div>
// 		)
// 	}
// });
//
// module.exports = SignUpForm;
