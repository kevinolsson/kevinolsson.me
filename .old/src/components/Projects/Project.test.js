import React from 'react';
import ReactDOM from 'react-dom';
import { Projects } from './Projects';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestProjects = withTest(Projects);

describe('Projects', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestProjects />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestProjects />);
    expect(wrapper.exists()).toBe(true);
  });
});
