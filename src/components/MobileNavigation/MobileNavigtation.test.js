import React from 'react';
import ReactDOM from 'react-dom';
import { MobileNavigation } from './MobileNavigation';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestMobileNavigation = withTest(MobileNavigation);

describe('MobileNavigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestMobileNavigation>Mock</TestMobileNavigation>, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestMobileNavigation>Mock</TestMobileNavigation>);
    expect(wrapper.exists()).toBe(true);
  });
});
