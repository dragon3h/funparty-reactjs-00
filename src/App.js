import React from 'react';
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import './App.css';

function App() {
  return (
      <BrowserRouter data-test="app-component">
        <MainNavigation/>
        <Switch>
          <Route>
            Home
          </Route>
        </Switch>
      </BrowserRouter>
  );
}

export default App;
