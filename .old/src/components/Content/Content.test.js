import React from 'react';
import ReactDOM from 'react-dom';
import Content from './Content';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestContent = withTest(Content);

describe('Content', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestContent />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestContent />);
    expect(wrapper.exists()).toBe(true);
  });
});
