import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Main from '../components/Main';
import Navigation from '../components/Navigation'

const Routes = () => (
  <BrowserRouter>
    <Main />
    <Navigation />
    <Switch>
      <Route path="/" component={Main} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
