import React from 'react';
import { DataProvider } from './DataContext'
import { Head } from 'components/Head/Head'; 
import { Router } from 'Router';
import data from './data.json'

const App = () => {
  console.log('data: ',data)
  return (
    <DataProvider value={data}>
      <Head />
      <Router />
    </DataProvider>
  );
};

export default App;