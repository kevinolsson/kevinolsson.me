import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeIntroduction } from './ResumeIntroduction';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestResumeIntroduction = withTest(ResumeIntroduction);

describe('ResumeIntroduction', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestResumeIntroduction />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestResumeIntroduction />);
    expect(wrapper.exists()).toBe(true);
  });
});
