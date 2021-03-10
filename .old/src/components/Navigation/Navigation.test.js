import React from 'react';
import ReactDOM from 'react-dom';
import { Navigation } from './Navigation';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestNavigation = withTest(Navigation);

describe('Navigation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestNavigation />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestNavigation />);
    expect(wrapper.exists()).toBe(true);
  });
});
