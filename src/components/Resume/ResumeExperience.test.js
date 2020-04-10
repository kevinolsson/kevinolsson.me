import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeExperience } from './ResumeExperience';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestResumeExperience = withTest(ResumeExperience);

describe('ResumeExperience', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestResumeExperience />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestResumeExperience />);
    expect(wrapper.exists()).toBe(true);
  });
});
