import React from 'react';
import ReactDOM from 'react-dom';
import { Contact } from './Contact';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestContact = withTest(Contact);

describe('Contact', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestContact />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestContact />);
    expect(wrapper.exists()).toBe(true);
  });
});
