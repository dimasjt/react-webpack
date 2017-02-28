import React from 'react';
import { Route, Link } from 'react-router';

import Layout from './components/Layout.jsx';
import ListEvents from './components/ListEvents.jsx';
import TodoWrapper from './components/Todo/index.jsx';
import Login from './components/Users/Login.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="/events" component={ListEvents} />
    <Route path="/todos" component={TodoWrapper} />
    <Route path="/login" component={Login} />
  </Route>
);

module.exports = routes;
