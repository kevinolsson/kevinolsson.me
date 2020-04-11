import React from 'react';
import ReactDOM from 'react-dom';
import { ScrollToTop } from './ScrollToTop';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestScrollToTop = withTest(ScrollToTop);

describe('ScrollToTop', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestScrollToTop />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestScrollToTop />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should call scrollTo', () => {
    global.scrollTo = jest.fn();
    mount(<TestScrollToTop />);
    expect(window.scrollTo).toHaveBeenCalled();
  });
});
