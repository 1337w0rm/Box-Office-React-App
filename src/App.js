import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Navs from './components/Navs';

import Home from './pages/Home';
import Starred from './pages/Starred';

export default function App() {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>

      <Route exact path="/starred">
        <Starred />
      </Route>

      <Route>404 Page Not Found</Route>
    </Switch>
  );
}
