import React from 'react';
import ReactDOM from 'react-dom';
import { Layout } from './Layout';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestLayout = withTest(Layout);

describe('Layout', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestLayout>Mock</TestLayout>, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestLayout>Mock</TestLayout>);
    expect(wrapper.exists()).toBe(true);
  });
});
