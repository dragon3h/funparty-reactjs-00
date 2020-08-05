import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

import App from './App';

Enzyme.configure({adapter: new EnzymeAdapter()});

const setup = (props = {}, state = null) => {
  return shallow(<App {...props} />);
};

const findByTestAttr = (wrapper, val) => {
  return wrapper.find(`[data-test="${val}"]`);
};

test('renders App component without errors', () => {
  const wrapper = setup();
  const appComponent = findByTestAttr(wrapper, 'app-component');
  expect(appComponent.length).toBe(1);
});

test('renders Router without errors', () => {
  const wrapper = setup();
  const routerComponent = wrapper.find('BrowserRouter');
  expect(routerComponent.length).toBe(1);
});
