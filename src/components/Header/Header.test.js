import React from 'react';
import ReactDOM from 'react-dom';
import { Header } from './Header';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestHeader = withTest(Header);

describe('Header', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHeader />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestHeader />);
    expect(wrapper.exists()).toBe(true);
  });
});
