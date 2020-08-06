import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import LoginLogout from './login-logout.component';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props={}) => {
  return shallow(<LoginLogout />);
};

test('renders Login/Logout component without errors', () => {

});