import React, { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

const SearchProcess = lazy(() => import('./pages/search-process'));
const ProcessList = lazy(() => import('./pages/process-list'));

function Routes(props) {
  return (
    <Suspense fallback={null}>
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={props => <SearchProcess {...props} />}
          />
          <Route
            exact
            path="/search/:term"
            component={props => <ProcessList {...props} />}
          />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    </Suspense>
  );
}

export default Routes;
