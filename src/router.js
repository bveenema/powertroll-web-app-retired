//Livs
import React from 'react';
import { Router, Route, browserHistory } from 'react-router';

// Components
import App from './App';
import Login from './pages/Login';
import Processes from './pages/Processes';
import NotFound from './pages/NotFound';

// Data
let userData = {
  loggedIn: true,
  firstName: "Ben",
  lastName: "Veenema",
  _id: 4141123456789123456789123,
};
// Routes
const routes = (
  <Router history={browserHistory}>
    <Route component={App} userData={userData}>
      <Route path="/" component={Login} userData={userData} />
      <Route path="/processes" component={Processes} userData={userData} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default routes;
