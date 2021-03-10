import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeEducation } from './ResumeEducation';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestResumeEducation = withTest(ResumeEducation);

describe('ResumeEducation', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestResumeEducation />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestResumeEducation />);
    expect(wrapper.exists()).toBe(true);
  });
});
