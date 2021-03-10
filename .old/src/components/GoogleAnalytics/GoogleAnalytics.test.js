import React from 'react';
import ReactDOM from 'react-dom';
import { GoogleAnalytics } from './GoogleAnalytics';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestGoogleAnalytics = withTest(GoogleAnalytics);

describe('GoogleAnalytics', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestGoogleAnalytics />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestGoogleAnalytics />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call ga (Goggle Analytic) related functions', () => {
    global.ga = jest.fn();
    mount(<TestGoogleAnalytics />);
    expect(window.ga).toHaveBeenCalled();
  });
});
