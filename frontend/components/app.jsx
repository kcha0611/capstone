const React = require('react');
const Link = require('react-router').Link;
const SessionStore = require('../stores/session_store');
const ProjectIndex = require('./project_index')
const SessionActions = require('../actions/session_actions');
const ReactRouter = require('react-router');
const hashHistory = ReactRouter.hashHistory;
const ReactBootstrap = require('react-bootstrap');
const DropdownButton = ReactBootstrap.DropdownButton
const MenuItem = ReactBootstrap.MenuItem
const Navbar = ReactBootstrap.Navbar
const NavItem = ReactBootstrap.NavItem
const Nav = ReactBootstrap.Nav
const SearchBar = require('./search-bar');
const Button = ReactBootstrap.Button
const SlideShow = require('./carousel')

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  handleLogOut() {
    // debugger
    SessionActions.logOut();
  },
  _goIndex () {
    hashHistory.push('#/projects')
  },
  render() {
    let dropDown;
    // var greet;
    let homepage;
    if (SessionStore.isUserLoggedIn()) {
      // greet = (<h1 className="root-greet-header">Welcome, {SessionStore.currentUser().username}!</h1>)
      dropDown = (
        <Button onClick={this.handleLogOut}>LogOut</Button>)
      // <DropdownButton title="You" id="dropdownB-root">
      //   <h3>{SessionStore.currentUser().username}</h3>
      //   <MenuItem href={"/api/users/" + SessionStore.currentUser().id}>Profile</MenuItem>
      //   <MenuItem href={"/"}>Favorites</MenuItem>
      //   <MenuItem onSelect={this.handleLogOut}>LogOut</MenuItem>
      // </DropdownButton>)
      if (this.props.location.pathname.slice(1) === "projects") {
        // debugger
        homepage = (<SlideShow></SlideShow>)
      }
    }
    // else if (this.props.location.pathname.slice(1) === "signup") {
    //   dropDown;http://www.w3schools.com/howto/img_nature_wide.jpg
    // }http://www.w3schools.com/howto/img_nature_wide.jpg
    else {
      dropDown = (
        <Nav key={2} className="nav-signin">
          <NavItem key={4} href="/#/signup">Sign Up</NavItem>
          <NavItem key={5} href="/#/login">Login</NavItem>
        </Nav>
      )
    }
    // debugger
    return (
          <div className="root-container">
            <Navbar id="main-nav">
              <Nav key={1} className="nav-item">
                  <Navbar.Header>
                    <Navbar.Brand id="root-text-nav">
                      <a href="/" id="root-constructables-nav">Constructables</a>
                      <div className="root-catchphrase">Share What You Make</div>
                    </Navbar.Brand>
                  </Navbar.Header>
                  <NavItem key={2} href="#/projects" id="nav-item-li-2">Explore</NavItem>
                  <NavItem key={3} href="#/projects/new" id="nav-item-li-3">Publish</NavItem>
                  <SearchBar id="root-search-bar"></SearchBar>
                <Nav className="pull-right"></Nav>
              </Nav>
            </Navbar>
            <p className="dropDown-login">{dropDown}</p>
            {homepage}
        <ul>{this.props.children}</ul>
      </div>
    );
  }
})

module.exports = App;

// <div className="image-search-bar">
//               <img src="https://static.pexels.com/photos/1562/italian-landscape-mountains-nature.jpg" className="root-background" />
//               <h2 className="root-image-text"><span className="root-image-text-span">Lets Make <p className="renewable-energy">Renewable Energy</p></span></h2>
//               <SearchBar id="background-search-bar"></SearchBar>
//             </div>
