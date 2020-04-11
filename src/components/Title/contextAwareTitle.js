import React from 'react';
import { useLocation } from 'react-router-dom';
import DataContext from 'DataContext';

export const contextAwareTitle = Component => () => {
  const { settings } = React.useContext(DataContext);
  const { siteTitle, introduction, displayPhoto } = settings[0];
  const location = useLocation();

  return (
    <Component
      prominent={location.pathname === '/'}
      avatar={displayPhoto}
      name={siteTitle}
      introduction={introduction}
    />
  );
};
