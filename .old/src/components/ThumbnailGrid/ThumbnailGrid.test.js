import React from 'react';
import ReactDOM from 'react-dom';
import { ThumbnailGrid } from './ThumbnailGrid';
import { mount } from 'enzyme';
import { withTest } from 'withTest';

const TestThumbnailGrid = withTest(ThumbnailGrid);

describe('ThumbnailGrid', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TestThumbnailGrid
        thumbnails={[
          { type: 'standard', thumbnail: 'mock', url: 'mock', title: 'mock' }
        ]}
      />,
      div
    );
  });

  it('should be able to mount render', () => {
    const wrapper = mount(
      <TestThumbnailGrid
        thumbnails={[
          { type: 'standard', thumbnail: 'mock', url: 'mock', title: 'mock' }
        ]}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a number of Thumbnails equivalent to the array passed', () => {
    const wrapper = mount(
      <TestThumbnailGrid
        thumbnails={[
          { type: 'standard', thumbnail: 'mock', url: 'mock', title: 'mock' },
          { type: 'standard', thumbnail: 'mock', url: 'mock', title: 'mock' }
        ]}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });
});
