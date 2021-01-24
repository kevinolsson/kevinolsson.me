import React from 'react';

const DataContext = React.createContext(true);
export const DataProvider = DataContext.Provider;
export const DataConsumer = DataContext.Consumer;

export default DataContext;