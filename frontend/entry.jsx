const React = require('react');
const ReactDOM = require('react-dom');
const ReactRouter = require('react-router');
const Router = ReactRouter.Router;
const Route = ReactRouter.Route;
const IndexRoute = ReactRouter.IndexRoute;
const hashHistory = ReactRouter.hashHistory;
const App = require('./components/app');
const ProjectActions = require('./actions/project_actions');
const ProjectIndex = require('./components/project_index');
const ProjectIndexItem = require('./components/project_index_item');
const ProjectForm = require('./components/project_form');
// const ProjectShow = require('./components/project_show');
// const ProjectEdit = require('./components/project_edit');
// const CommentActions = require('./actions/comment_actions');
// const CommentForm = require('./components/comment_form');
// const CommentEdit = require('./components/comment_edit');
const LoginForm = require('./components/login_form');
const SessionStore = require('./stores/session_store');
const SessionActions = require('./actions/session_actions');
const SignUpForm = require('./components/sign_up_form');

const routes = (
  <Router history={hashHistory}>
      <Route path="/" component={App}>
       <Route path="/login" component={LoginForm} />
       <Route path="/signup" component={SignUpForm} />
       <Route path="/projects/new" component={ProjectForm} />
       <Route path="/projects" component={ProjectIndex} />
      </Route>
  </Router>
)
// <Route path="/project/:projectId" component={ProjectShow}/>
// <Route path="/project/:projectId/edit" component={ProjectEdit}/>
// <Route path="/project/:projectId/comment/:commentId" component={CommentForm} onEnter={_ensureLoggedIn}/>
// <Route path="/projcet/:projectId/comment/:commentId" component={CommentShow} onEnter={_ensureLoggedIn}/>
// <Route path="/projcet/:projectId/comment/:commentId/edit" component={CommentEdit} onEnter={_ensureLoggedIn}/>

document.addEventListener('DOMContentLoaded', function() {
  if (window.currentUser) {
    SessionActions.receiveCurrentUser(window.currentUser);
  }

  const root = document.getElementById('content');
  ReactDOM.render(routes, root);
});
