import React, { Component } from 'react';

import MainHeader from '../main-header/main-header.component';
import './main-navigation.style.scss';

class MainNavigation extends Component {
  
  render() {
    return(
        <MainHeader data-test="main-header-component">
          <div className="main-navigation" data-test="main-navigation-component">
            <ul>
              <li>Home</li>
              <li>Products</li>
              <li>Schedule</li>
            </ul>
          </div>
        </MainHeader>
        
    );
  }
}

export default MainNavigation;