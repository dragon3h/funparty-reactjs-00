import React from 'react';

import './main-header.style.scss';

const MainHeader = (props) => {
  return (
      <header className="main-header" data-test="main-header-component">
        {props.children}
      </header>
  );
};

export default MainHeader;
