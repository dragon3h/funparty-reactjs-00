import React from 'react';
import {NavLink} from 'react-router-dom';

import './nav-links.style.scss';

const navLinks = () => {
  return (
      <ul className="nav-links">
        <li>
          <NavLink to='/' exact>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to='/dashboard'>
            Dashboard
          </NavLink>
        </li>
        <li>
          <button className="nav-links__btn-drpdown">Products
            {/*<FontAwesomeIcon icon={faCaretDown} />*/}
          </button>
          <div className="nav-links__content">
            <NavLink to="/products">All Products</NavLink>
            <NavLink to="/products/bouncy-castles">Bouncy Castles</NavLink>
            <NavLink to="/products/mascots">Mascots</NavLink>
            <NavLink to="/products/games">Games</NavLink>
            <NavLink to="/products/food-machines">Food Machines</NavLink>
          </div>
        </li>
        <li>
          <NavLink to='/schedule'>
            Schedule
          </NavLink>
        </li>
      </ul>
  );
};

export default navLinks;