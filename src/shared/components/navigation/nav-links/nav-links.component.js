import React from 'react';
import { NavLink } from 'react-router-dom';

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
          <NavLink to='/projects' exact>
            Products
          </NavLink>
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