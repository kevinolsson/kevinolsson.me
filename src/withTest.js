import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { MuiThemeProvider } from '@material-ui/core/styles';
import { DataProvider } from './DataContext';
import { theme } from 'Theme';

export const withTest = Component => props => {
  const { MemoryRouterProps, DataProviderProps, ...componentProps } = props;

  return (
    <MemoryRouter {...MemoryRouterProps}>
      <MuiThemeProvider theme={theme}>
        <DataProvider
          value={{
            posts: [],
            projects: [],
            settings: [
              {
                socialMedia: {}
              }
            ]
          }}
          {...DataProviderProps}
        >
          <Component {...componentProps} />
        </DataProvider>
      </MuiThemeProvider>
    </MemoryRouter>
  );
};
