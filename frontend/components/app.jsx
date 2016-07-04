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

const App = React.createClass({
  componentDidMount() {
    SessionStore.addListener(this.forceUpdate.bind(this));
  },
  handleLogOut() {
    // debugger
    SessionActions.logOut();
  },
  render() {
    let dropDown;
    var greet;
    let homepage;
    if (SessionStore.isUserLoggedIn()) {
      greet = (<h1 className="root-greet-header">Welcome, {SessionStore.currentUser().username}!</h1>)
      dropDown = (
      <DropdownButton title="You" id="dropdownB-root">
        <h3>{SessionStore.currentUser().username}</h3>
        <MenuItem href={"/api/users/" + SessionStore.currentUser().id}>Profile</MenuItem>
        <MenuItem href={"/"}>Favorites</MenuItem>
        <MenuItem onSelect={this.handleLogOut}>LogOut</MenuItem>
      </DropdownButton>)
      if (this.props.location.pathname.slice(1) === "projects") {
        homepage = (<div>
                      <img src="https://shareonline.in/wp-content/uploads/2016/06/3d-amazing-images-hd-space-3d-hd-wallpaper-19670077-1920-1080-tWBbMK.jpg" className="root-background" />
                      <h2 className="root-image-text"><span className="root-image-text-span">Explore</span></h2>
                    </div>)
      }
    }
    else {
      dropDown = (
        <Nav key={2}>
          <NavItem key={4} href="/#/signup">Sign Up</NavItem>
          <NavItem key={5} href="/#/login">Login</NavItem>
        </Nav>
      )
    }
    // debugger
    return (
          <div>
            <Navbar id="main-nav">
              <Nav key={1}>
                  <NavItem key={1} href="/">Constructables</NavItem>
                  <NavItem key={2} href="/#/projects">Explore</NavItem>
                  <NavItem key={3} href="/#/projects/new">Publish</NavItem>
                <Nav className="pull-right"></Nav>
              </Nav>
            </Navbar>
            <div className="dropDown-login">{dropDown}</div>
            <div>{greet}</div>
            {homepage}
        <ul>{this.props.children}</ul>
      </div>
    );
  }
})

module.exports = App;
