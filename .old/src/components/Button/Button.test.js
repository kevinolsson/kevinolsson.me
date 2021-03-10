import React from 'react';
import ReactDOM from 'react-dom';
import { Button } from './Button';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestButton = withTest(Button);

describe('Button', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestButton>Button</TestButton>, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestButton>Button</TestButton>);
    expect(wrapper.exists()).toBe(true);
  });
});
