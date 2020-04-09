import React from 'react';
import ReactDOM from 'react-dom';
import { HtmlBlock } from './HtmlBlock';
import { mount } from 'enzyme';

describe('HtmlBlock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<HtmlBlock value="Hello" />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<HtmlBlock value="Hello" />);
    expect(wrapper.exists()).toBe(true);
  });
});
