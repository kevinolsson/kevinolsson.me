import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { DataProvider } from './DataContext'
import { Head } from 'components/Head/Head'; 
import { Router } from 'Router';
import { theme } from 'Theme';
import data from './data.json'

const useStyles = makeStyles((theme) => ({
  root: {
    opacity: '1 !important'
  }
}), { name: 'app' });

const App = () => {
  const classes = useStyles();
  return (
    <div id="app" className={classes.root}>
      <MuiThemeProvider theme={theme}>
        <DataProvider value={data}>
          <Head />
          <Router />
        </DataProvider>
      </MuiThemeProvider>
    </div>
  );
};

export default App;