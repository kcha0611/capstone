
const React = require('react');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const FormGroup = require('react-bootstrap').FormGroup;
const ControlLabel = require('react-bootstrap').ControlLabel;
const ProjectActions = require('../actions/project_actions.js');
const FormControl = require('react-bootstrap').FormControl;
const Button = require('react-bootstrap').Button;
const Navbar = require('react-bootstrap').Navbar;
const ProjectStore = require('../stores/project_store.js');


let projects;

const SearchBar = React.createClass({
  getInitialState: function() {
    return {
      input: ""
    };
  },
  componentDidMount(){
    this.projectListener = ProjectActions.fetchAllProjects();
  },
  // componentWillUnmount () {
  //   this.projectListener.remove()
  // },
  handleChange(e){
    e.preventDefault();
    this.setState({input: e.target.value});
  },
  _onSubmit(e){
    // debugger
    e.preventDefault();
    ProjectActions.fetchSearchedProjects({searchTerm: this.state.input})
    this.setState({input: ""});
  },
  autoFillText() {
    var subjects = ["DIY Projects","Red Velvet Cupcakes", "WiFi Stunt Car", "Peanut Butter Necklaces"];
  },
  render(){
    var $html = $("<FormControl/>");

    return(
      <div id="search-bar-id">
        <FormGroup>
          <FormControl
            type="text"
            placeholder="search..."
            value={this.state.value}
            onChange={this.handleChange}
            id="search-input"
          />
        </FormGroup>
      </div>
    );
  }
});

module.exports = SearchBar;

// <FormControl
//   type="text"
//   placeholder={($("FormControl").append("<p>Hi</p>")).html()}
//   value={this.state.value}
//   onChange={this.handleChange}
//   id="search-input"
// />
// <Navbar.Form>
//   <FormGroup>
//     <FormControl/>
//   <input type="submit" onClick={this._onSubmit}value="Search"></input>
//   </FormGroup>
// </Navbar.Form>
