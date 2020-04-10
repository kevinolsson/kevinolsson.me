import React from 'react';
import ReactDOM from 'react-dom';
import { Wrapper } from './Wrapper';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestWrapper = withTest(Wrapper);

describe('Wrapper', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestWrapper>Hello World</TestWrapper>, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestWrapper>Hello World</TestWrapper>);
    expect(wrapper.exists()).toBe(true);
  });
});
