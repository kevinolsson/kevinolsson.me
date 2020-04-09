import React from 'react';
import ReactDOM from 'react-dom';
import { ImageWithSrcset } from './ImageWithSrcset';
import { mount } from 'enzyme';

describe('ImageWithSrcset', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<ImageWithSrcset src="mockImage.jpg" />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<ImageWithSrcset src="mockImage.jpg" />);
    expect(wrapper.exists()).toBe(true);
  });
});
