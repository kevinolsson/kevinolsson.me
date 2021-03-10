import React from 'react';
import ReactDOM from 'react-dom';
import { Head } from './Head';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestHead = withTest(Head);

describe('Head', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHead />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestHead />);
    expect(wrapper.exists()).toBe(true);
  });
});
