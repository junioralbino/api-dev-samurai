import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import MainPage from './pages/MainPage';
import RepositoriesPages from './pages/RepositoriesPages';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/:login/repositories">
           <RepositoriesPages />
        </Route>
        <Route path="/">
          <MainPage />
        </Route>
      </Switch>
    </Router>
  );
}
