import React from 'react';
import ReactDOM from 'react-dom';
import { HamburgerButton } from './HamburgerButton';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestHamburgerButton = withTest(HamburgerButton);

describe('HamburgerButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHamburgerButton />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestHamburgerButton />);
    expect(wrapper.exists()).toBe(true);
  });
});
