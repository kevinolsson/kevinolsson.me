import React from 'react';
import ReactDOM from 'react-dom';
import { ChipArray } from './ChipArray';
import { mount } from 'enzyme';
import { withTest } from 'withTest';
import Chip from '@material-ui/core/Chip';

const TestChipArray = withTest(ChipArray);

describe('ChipArray', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TestChipArray />, div);
  });

  it('should be able to mount render', () => {
    const wrapper = mount(<TestChipArray />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should render a number of Chips equivalent to the number of labels passed', () => {
    const wrapper = mount(<TestChipArray label={['Hello', 'World', 'Mock']} />);
    expect(wrapper.find(Chip)).toHaveLength(3);
  });
});
