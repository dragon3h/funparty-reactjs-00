import React from 'react';

import './main-header.style.scss';

const MainHeader = (props) => {
  return (
      <div className="main-header" data-test="main-header-component">
        {props.children}
      </div>
  );
};

export default MainHeader;
