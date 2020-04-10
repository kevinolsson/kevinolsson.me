import React from 'react';
import ReactDOM from 'react-dom';
import { ResumeOther } from './ResumeOther';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestResumeOther = withTest(ResumeOther);

describe('ResumeOther', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestResumeOther />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestResumeOther />);
    expect(wrapper.exists()).toBe(true);
  });
});
