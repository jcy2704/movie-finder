import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Trending from '../containers/Trending';
import Popular from '../containers/Popular';
import TopRated from '../containers/TopRated';
import Upcoming from '../containers/Upcoming';

const Routes = () => (
  <BrowserRouter>
    <Trending />
    {/* <Navigation /> */}
    <Switch>
      <Route path="/" component={Popular} exact />
      <Route path="/top" component={TopRated} />
      <Route path="/upcoming" component={Upcoming} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
