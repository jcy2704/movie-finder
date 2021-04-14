import React from 'react';
import {
  BrowserRouter, Route, Switch, Redirect,
} from 'react-router-dom';
import Trending from '../containers/Trending';
import Popular from '../containers/Popular';
import TopRated from '../containers/TopRated';
import Upcoming from '../containers/Upcoming';
import Navigation from '../components/Navigation';
import Movie from '../containers/Movie';

const Routes = () => (
  <BrowserRouter>
    <Trending />
    <Navigation />
    <Switch>
      <Route path="/" component={Popular} exact />
      <Route path="/top" component={TopRated} />
      <Route path="/upcoming" component={Upcoming} />
      <Route path="/movie/:id" component={Movie} exact />
      <Route path="*">
        <Redirect to="/" />
      </Route>
    </Switch>
    <div id="modalsContainer" />
  </BrowserRouter>
);

export default Routes;
