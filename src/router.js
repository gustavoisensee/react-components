import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';

import { history } from './store';
import MainLayoutContainer from './layouts/container';

const Routes = () => (
  <Router history={history}>
    <Switch>
      <Route component={MainLayoutContainer} />
    </Switch>
  </Router>
);

export default Routes;
