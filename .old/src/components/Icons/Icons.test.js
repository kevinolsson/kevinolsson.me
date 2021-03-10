import React from 'react';
import ReactDOM from 'react-dom';
import LinkedInIcon from './LinkedInIcon';
import TwitterIcon from './TwitterIcon';

describe('Icons', () => {
  it('should render a LinkedInIcon', () => {
    const div = document.createElement('div');
    ReactDOM.render(<LinkedInIcon />, div);
  });

  it('should render a TwitterIcon', () => {
    const div = document.createElement('div');
    ReactDOM.render(<TwitterIcon />, div);
  });
});
