import React from 'react';
import ReactDOM from 'react-dom';
import Meta from './Meta';
import { mount } from 'enzyme';

describe('Meta', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Meta />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<Meta />);
    expect(wrapper.exists()).toBe(true);
  });
});
