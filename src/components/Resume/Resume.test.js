import React from 'react';
import ReactDOM from 'react-dom';
import { Resume } from './Resume';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestResume = withTest(Resume);

describe('Resume', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestResume />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestResume />);
    expect(wrapper.exists()).toBe(true);
  });
});
