import React, { Component } from 'react';

import MainHeader from '../main-header/main-header.component';
import Logo from '../logo/logo.component';
import NavLinks from '../nav-links/nav-links.component';

import './main-navigation.style.scss';

class MainNavigation extends Component {
  
  render() {
    return(
        <MainHeader data-test="main-header-component">
          <Logo />
          <nav className="main_header__main-navigation" data-test="main-navigation-component">
              <NavLinks />
          </nav>
        </MainHeader>
    );
  }
}

export default MainNavigation;