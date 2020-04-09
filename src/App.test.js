import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { mount } from 'enzyme';
import { withTest } from './withTest';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    const TestApp = withTest(App);
    ReactDOM.render(<TestApp />, div);
  });

  it('should be able to mount render', () => {
    const TestApp = withTest(App);
    const wrapper = mount(<TestApp />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should set render with a style opacity set to 1', () => {
    const TestApp = withTest(App);
    const wrapper = mount(<TestApp />);
    expect(
      wrapper
        .find('div')
        .first()
        .props().style
    ).toEqual({
      opacity: 1
    });
  });
});
