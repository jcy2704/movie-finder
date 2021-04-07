import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trending from '../containers/Trending';
// import Navigation from '../components/Navigation';

const Routes = () => (
  <BrowserRouter>
    {/* <Trending /> */}
    {/* <Navigation /> */}
    <Switch>
      <Route path="/" component={Trending} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
