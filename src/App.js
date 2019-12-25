import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Router from './Router';
import theme from './components/Theme';

const App = () => (
  <MuiThemeProvider theme={theme}>
    <Router />
  </MuiThemeProvider>
);

export default App;
