import React from 'react';
import ReactDOM from 'react-dom';
import { Title } from './Title';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestTitle = withTest(Title);

describe('Title', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestTitle />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestTitle />);
    expect(wrapper.exists()).toBe(true);
  });
});
