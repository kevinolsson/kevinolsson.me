import React from 'react';
import ReactDOM from 'react-dom';
import { ProjectPost } from './ProjectPost';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestProjectPost = withTest(ProjectPost);

describe('ProjectPost', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestProjectPost />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestProjectPost />);
    expect(wrapper.exists()).toBe(true);
  });
});
