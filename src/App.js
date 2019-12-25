import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Router from './Router';
import theme from './components/Theme';

const App = () => (
  <ThemeProvider theme={theme}>
    <Router />
  </ThemeProvider>
);

export default App;
