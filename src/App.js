import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { DataProvider } from './DataContext'
import { Head } from 'components/Head/Head'; 
import { Router } from 'Router';
import { theme } from 'Theme';
import data from './data.json'

const App = () => {
  return (
      <MuiThemeProvider theme={theme}>
        <DataProvider value={data}>
          <Head />
          <Router />
        </DataProvider>
      </MuiThemeProvider>
  );
};

export default App;