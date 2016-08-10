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
const Modal = require('react-bootstrap').Modal;

const App = React.createClass({
  getInitialState: function() {
    return {
      show: false
    };
  },
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
  showModal() {
    this.setState({show: true})
  },
  hideModal() {
    this.setState({show: false})
  },
  render() {
    let dropDown;
    // var greet;
    let homepage;
    let searchBar;
    let navBar;
    let modal;
    if (this.props.location.pathname.slice(1) === "") {
      modal = (
      <Modal bsSize="large" id="myModal">
        <Modal.Header closeButton>
          <Modal.Title>Welcome To Constructables</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h2><Button>Sign In</Button><Button>Sign Up</Button></h2>
          <p>Constructables is a website for sharing DIY Projects! If you have any ideas please feel free to share. Otherwise, start learning new projects!</p>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={this.hideModal}>Close</Button>
        </Modal.Footer>
      </Modal>)
    }
    if (this.props.location.pathname.slice(1) === "projects") {
      searchBar = (<SearchBar id="root-search-bar"></SearchBar>)
    }
    if (SessionStore.isUserLoggedIn()) {
      // greet = (<h1 className="root-greet-header">Welcome, {SessionStore.currentUser().username}!</h1>)
      dropDown = (
        <Button onClick={this.handleLogOut} className="logout-button">LogOut</Button>)
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
          <NavItem key={4} href="/#/signup" className="sign-up-btn">Sign Up</NavItem>
          <NavItem key={5} href="/#/login" className="login-btn">Login</NavItem>
        </Nav>
      )
    }
    if (this.props.location.pathname.slice(1) === "login" || this.props.location.pathname.slice(1) === "signup") {
      navBar;
    } else {
      navBar = (<Navbar id="main-nav">
                  <Nav key={1} className="nav-item">
                      <Navbar.Header>
                        <Navbar.Brand id="root-text-nav">
                          <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_85,w_100/v1470167967/instructables_cs8fky.png" className="root-navbar-img"></img>
                          <a href="/" id="root-constructables-nav"><p className="constructables-p">Constructables</p></a>
                        </Navbar.Brand>
                      </Navbar.Header>
                      <NavItem key={2} href="#/projects" id="nav-item-li-2">Explore</NavItem>
                      <NavItem key={3} href="#/projects/new" id="nav-item-li-3">Publish</NavItem>
                      <NavItem key={4} href="https://github.com/kcha0611" id="nav-item-li-4">About Us</NavItem>
                      <NavItem key={5} href="https://www.linkedin.com/in/kencha" id="nav-item-li-5">Contact</NavItem>

                  <Nav className="pull-right"></Nav>
                  </Nav>
                </Navbar>)
      }
    return (
          <div className="root-container">
            {modal}
            {navBar}
            <p className="dropDown-login">{dropDown}</p>
            {homepage}
            {searchBar}
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
                      // <div className="root-catchphrase">Share What You Make</div>


// <img src="http://res.cloudinary.com/dllnnnotc/image/upload/c_scale,h_83,w_640/v1470174720/imageedit_1_9809346757_rfdqez.png" className="navbar-catchphrase"></img>
