import React from 'react';
import ReactDOM from 'react-dom';
import { ProjectPreview } from './ProjectPreview';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestProjectPreview = withTest(ProjectPreview);

describe('ProjectPreview', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestProjectPreview />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestProjectPreview />);
    expect(wrapper.exists()).toBe(true);
  });
});
