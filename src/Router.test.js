import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from './Router';
import { mount } from 'enzyme';
import { withTest } from './withTest';
import { Home } from 'components/Home/Home';
import { BlogPost } from 'components/BlogPost/BlogPost';
import { Projects } from 'components/Projects/Projects';
import { ProjectRouter } from 'components/ProjectRouter/ProjectRouter';
import { Resume } from 'components/Resume/Resume';
import { Contact } from 'components/Contact/Contact';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

const TestRouter = withTest(Router);

describe('Router', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestRouter />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestRouter />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render the Home component if path is /', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/'] }} />
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should render the Home component if path is /blog', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/'] }} />
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });

  it('should render the BlogPost component if path is /blog/<blogSlug>', () => {
    const wrapper = mount(
      <TestRouter
        MemoryRouterProps={{ initialEntries: ['/blog/mock-blog-url'] }}
      />
    );
    expect(wrapper.find(BlogPost)).toHaveLength(1);
  });

  it('should render the Projects component if path is /projects', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/projects'] }} />
    );
    expect(wrapper.find(Projects)).toHaveLength(1);
  });

  it('should render the ProjectRouter component if path is /projects/<projectSlug>', () => {
    const wrapper = mount(
      <TestRouter
        MemoryRouterProps={{ initialEntries: ['/projects/mock-projects-url'] }}
      />
    );
    expect(wrapper.find(ProjectRouter)).toHaveLength(1);
  });

  it('should render the Resume component if path is /resume', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/resume'] }} />
    );
    expect(wrapper.find(Resume)).toHaveLength(1);
  });

  it('should render the Contact component if path is /contact', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/contact'] }} />
    );
    expect(wrapper.find(Contact)).toHaveLength(1);
  });

  it('should render the Contact component if path is /contact', () => {
    const wrapper = mount(
      <TestRouter MemoryRouterProps={{ initialEntries: ['/contact'] }} />
    );
    expect(wrapper.find(Contact)).toHaveLength(1);
  });

  it('should render the ErrorMessage component with a 404 code if path does not fit the router', () => {
    const wrapper = mount(
      <TestRouter
        MemoryRouterProps={{ initialEntries: ['/this-is-any-random-url'] }}
      />
    );
    expect(wrapper.find(ErrorMessage)).toHaveLength(1);
    expect(wrapper.find(ErrorMessage).props().code).toEqual(404);
  });
});
