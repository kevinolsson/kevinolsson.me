import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { BrowserRouter as Router } from 'react-router-dom';
import { Typography } from '@material-ui/core';
import theme from '../src/components/Theme';

addDecorator(
  storyFn => <MuiThemeProvider theme={theme}><Router><Typography component="div">{storyFn()}</Typography></Router></MuiThemeProvider>
);


configure(require.context('../src', true, /\.stories\.js$/), module);

