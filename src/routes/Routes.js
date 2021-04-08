import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trending from '../containers/Trending';
import Popular from '../containers/Popular';

const Routes = () => (
  <BrowserRouter>
    <Trending />
    {/* <Navigation /> */}
    <Switch>
      <Route path="/" component={Popular} exact />
    </Switch>
  </BrowserRouter>
);

export default Routes;
