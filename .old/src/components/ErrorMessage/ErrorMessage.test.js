import React from 'react';
import ReactDOM from 'react-dom';
import { ErrorMessage } from './ErrorMessage';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestErrorMessage = withTest(ErrorMessage);

describe('ErrorMessage', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestErrorMessage />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestErrorMessage />);
    expect(wrapper.exists()).toBe(true);
  });
});
