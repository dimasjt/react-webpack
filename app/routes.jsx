import React from 'react';
import { Route, Link } from 'react-router';

import ListEvents from './components/ListEvents.jsx';

const Routes = (
  <Route path="/" component={ListEvents}></Route>
);

module.exports = Routes;
