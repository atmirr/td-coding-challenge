import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import UserProfile from './components/UserProfile';

function Main() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <UsersList />
        </Route>
        <Route path="/user/:userId">
          <UserProfile />
        </Route>
      </Switch>
    </Router>
  );
}

export default Main;
