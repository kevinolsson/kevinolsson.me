import React from 'react';
import ReactDOM from 'react-dom';
import { BlogBlock } from './BlogBlock';
import { mount } from 'enzyme';
import { withTest } from 'withTest';
import Typography from '@material-ui/core/Typography';

const TestBlogBlock = withTest(BlogBlock);

describe('BlogBlock', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestBlogBlock url="mock-url" />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestBlogBlock url="mock-url" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a Typography component with a variant of h2 if the title prop exists', () => {
    const wrapper = mount(<TestBlogBlock url="mock-url" title="Hello World" />);
    expect(wrapper.find(Typography)).toHaveLength(1);
  });

  it('should render the H2 typography with primary color if the featured prop is true. Black if false', () => {
    const wrapper = mount(
      <TestBlogBlock featured url="mock-url" title="Hello World" />
    );
    expect(wrapper.find(Typography).props().color).toEqual('primary');

    wrapper.setProps({ featured: false });
    wrapper.update();

    expect(wrapper.find(Typography).props().color).toEqual('textPrimary');
  });

  it('should render a Typography component with a that contains a strong element if the date prop exists', () => {
    const wrapper = mount(<TestBlogBlock url="mock-url" date="today" />);
    expect(wrapper.find(Typography).find('strong')).toHaveLength(1);
  });

  it('should render a Typography component with a variant of body1 if the body prop exists', () => {
    const wrapper = mount(<TestBlogBlock url="mock-url" body="body" />);
    expect(wrapper.find(Typography)).toHaveLength(1);
    expect(wrapper.find(Typography).props().variant).toEqual('body1');
  });
});
