import React from 'react';
import ReactDOM from 'react-dom';
import { BlogPost } from './BlogPost';
import { mount } from 'enzyme';
import { withTest } from 'withTest';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { Typography } from '@material-ui/core';

const TestBlogPost = withTest(BlogPost);
const mockPost = {
  content: 'Mock Content',
  isEmpty: false,
  excerpt: '',
  title: 'Mock Title',
  date: '2020-03-27T19:47:42.115Z',
  subtitle: 'Mock Subtitle',
  name: 'mock-blog-post',
  body: 'Mock Body'
};

describe('BlogPost', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{
          value: { posts: [mockPost] }
        }}
      />,
      div
    );
  });

  it('should be able to mount render', () => {
    const wrapper = mount(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{
          value: { posts: [mockPost] }
        }}
      />
    );
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find(ErrorMessage)).toHaveLength(0);
  });

  it('should return an ErrorMessage component with a 404 code if there is no post that matches the specified blog slug / url', () => {
    const wrapper = mount(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{ value: { posts: [] } }}
      />
    );
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).props().code).toEqual(404);
  });

  it('should render an H1 Typography component if post.title exists', () => {
    const wrapper = mount(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{
          value: { posts: [{ ...mockPost, title: 'Hello World' }] }
        }}
      />
    );

    const TypographyComponents = wrapper.find(Typography);
    let checkFlag = false;
    TypographyComponents.map(Component => {
      if (Component.props().variant === 'h1') {
        expect(Component.text()).toEqual('Hello World');
        return (checkFlag = true);
      }
      return false;
    });

    expect(checkFlag).toBe(true);
  });

  it('should render a Body1 Typography component containing a strong element containing a formatted date if post.date exists', () => {
    const wrapper = mount(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{
          value: { posts: [{ ...mockPost, date: '2020-01-01T00:00:00.000Z' }] }
        }}
      />
    );

    const TypographyComponents = wrapper.find(Typography);
    let checkFlag = false;
    TypographyComponents.map(Component => {
      if (
        !!Component.find('strong').length &&
        Component.props().variant === 'body1'
      ) {
        expect(Component.text()).toEqual('January 1st, 2020');
        return (checkFlag = true);
      }
      return false;
    });

    expect(checkFlag).toBe(true);
  });

  it('should render a H5 Typography component if post.subtitle exists', () => {
    const wrapper = mount(
      <TestBlogPost
        MemoryRouterProps={{
          initialEntries: ['/blog/mock-blog-post']
        }}
        DataProviderProps={{
          value: { posts: [{ ...mockPost, subtitle: 'Hello World' }] }
        }}
      />
    );

    const TypographyComponents = wrapper.find(Typography);
    let checkFlag = false;
    TypographyComponents.map(Component => {
      if (Component.props().variant === 'h5') {
        expect(Component.text()).toEqual('Hello World');
        return (checkFlag = true);
      }
      return false;
    });

    expect(checkFlag).toBe(true);
  });
});
