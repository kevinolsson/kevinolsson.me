import React from 'react';
import ReactDOM from 'react-dom';
import { HamburgerIcon } from './HamburgerIcon';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestHamburgerIcon = withTest(HamburgerIcon);

describe('HamburgerIcon', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHamburgerIcon />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestHamburgerIcon />);
    expect(wrapper.exists()).toBe(true);
  });
});
