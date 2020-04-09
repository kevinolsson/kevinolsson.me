import React from 'react';
import ReactDOM from 'react-dom';
import { withTest } from './withTest';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';

describe('withTest', () => {
  const Component = props => <div {...props}>Hello World</div>;

  it('renders without crashing', () => {
    const div = document.createElement('div');
    const TestComponent = withTest(Component);
    ReactDOM.render(<TestComponent />, div);
  });

  it('should be able to mount render', () => {
    const TestComponent = withTest(Component);
    const wrapper = mount(<TestComponent />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should wrap the component inside the MemoryRouter, MuiThemeProvider components', () => {
    const TestComponent = withTest(Component);
    const wrapper = mount(<TestComponent />);

    expect(wrapper.find(MemoryRouter)).toHaveLength(1);
    expect(wrapper.find(MuiThemeProvider)).toHaveLength(1);
  });

  it('should forward component related props to the component itself', () => {
    const TestComponent = withTest(Component);
    const wrapper = mount(<TestComponent hello="world" />);
    expect(wrapper.find(Component).props().hello).toEqual('world');
  });
});
