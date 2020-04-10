import React from 'react';
import ReactDOM from 'react-dom';
import { Home } from './Home';
import { mount } from 'enzyme';
import { withTest } from 'withTest';
import { ProjectPreview } from 'components/ProjectPreview/ProjectPreview';

const TestHome = withTest(Home);

describe('Home', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestHome />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestHome />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a ProjectPreivew component if showProjectPreview is true && there are posts in the array', () => {
    const wrapper = mount(
      <TestHome
        showProjectPreview
        DataProviderProps={{
          value: {
            settings: [
              {
                socialMedia: {}
              }
            ],
            projects: [
              {
                content: 'Mock',
                isEmpty: false,
                excerpt: '',
                title: 'Mock',
                date: '2020-04-04T19:57:37.062Z',
                thumbnail: '/mock/image.jpg',
                type: 'external',
                value: 'mock.com',
                name: 'mock-url',
                body: 'Mock'
              }
            ]
          }
        }}
      />
    );
    expect(wrapper.find(ProjectPreview)).toHaveLength(1);
  });
});
