import React from 'react';

import './logo.style.scss';
import Logo from '../../../../assets/icons/funparty-rentals.png';

const logo = () => {
  return (
      <div className="main-header__logo">
        <img src={Logo} className="main-header__logo-img" alt="logo" height="50px" width="auto" />
      </div>
  );
};

export default logo;