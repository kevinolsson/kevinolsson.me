import React from 'react';
import ReactDOM from 'react-dom';
import { IgnoreLayoutWrapper } from './IgnoreLayoutWrapper';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestIgnoreLayoutWrapper = withTest(IgnoreLayoutWrapper);

describe('IgnoreLayoutWrapper', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TestIgnoreLayoutWrapper>Mock</TestIgnoreLayoutWrapper>,
      div
    );
  });

  it('should be able to mount render', () => {
    const wrapper = mount(
      <TestIgnoreLayoutWrapper>Mock</TestIgnoreLayoutWrapper>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
