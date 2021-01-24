import React from 'react';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { DataProvider } from './DataContext'
import { Head } from 'components/Head/Head'; 
import { Router } from 'Router';
import { theme } from 'Theme';
import data from './data.json'

const App = () => {
  const [hasMounted, setHasMounted] = React.useState(false);

  React.useEffect(() => {
    setHasMounted(true)
  }, [])

  return (
    <div id="app" style={hasMounted ? { opacity: 1} : undefined}>
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