import React from 'react';
import { Route, Link } from 'react-router';

import Layout from './components/Layout.jsx';
import ListEvents from './components/ListEvents.jsx';
import ListTodos from './components/Todo/ListTodos.jsx';

const routes = (
  <Route path="/" component={Layout}>
    <Route path="/events" component={ListEvents} />
    <Route path="/todos" component={ListTodos} />
  </Route>
);

module.exports = routes;
