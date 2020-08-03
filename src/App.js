import React from 'react';

import MainNavigation from './shared/components/navigation/main-navigation/main-navigation.component';
import './App.css';


function App() {
  return (
      <div>
        <MainNavigation />
        <div className="App" data-test="app-component">
          <h1>Hello Romr!</h1>
        </div>
      </div>
  );
}

export default App;
