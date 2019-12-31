import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import theme from '../src/components/Theme';

addDecorator(
  storyFn => <MuiThemeProvider theme={theme}><Router>{storyFn()}</Router></MuiThemeProvider>
);


configure(require.context('../src', true, /\.stories\.js$/), module);

