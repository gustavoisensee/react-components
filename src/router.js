import React from 'react';
import { Router, Route } from 'react-router';

import { history } from './store';
import MainLayoutContainer from './layouts/container';
import MainContainer from './modules/main/container';

export default (
  <Router history={history}>
    <Route component={MainLayoutContainer}>
      <Route path="/" component={MainContainer} />
      <Route path="*" component={MainContainer} />
    </Route>
  </Router>
);
