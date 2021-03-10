import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { withTest } from 'withTest';
import { contextAwareHamburgerButton } from 'components/HamburgerButton/contextAwareHamburgerButton';

const Component = () => <button>Hello World</button>;
const ContextAwareComponent = contextAwareHamburgerButton(Component);
const TestContextAwareComponent = withTest(ContextAwareComponent);

describe('contextAwareHamburgerButton', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestContextAwareComponent />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestContextAwareComponent />);
    expect(wrapper.exists()).toBe(true);
  });

  //TODO: write more detailed tests. - Kevin 10/04/2020
});
