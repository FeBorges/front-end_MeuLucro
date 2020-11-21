import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Login from './pages/login';
import CreateAccountStep01 from './pages/loginCreateAccountStep01';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/create/step01" component={CreateAccountStep01} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;