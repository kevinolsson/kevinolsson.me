import React from 'react';
import ReactDOM from 'react-dom';
import { ExperienceBlock } from './ExperienceBlock';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestExperienceBlock = withTest(ExperienceBlock);

describe('ExperienceBlock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TestExperienceBlock
        company="mock"
        position="mock"
        details={['Hello, World']}
      >
        Hello World
      </TestExperienceBlock>,
      div
    );
  });

  it('should be able to mount render', () => {
    const wrapper = mount(
      <TestExperienceBlock
        company="mock"
        position="mock"
        details={['Hello, World']}
      >
        Hello World
      </TestExperienceBlock>
    );
    expect(wrapper.exists()).toBe(true);
  });
});
