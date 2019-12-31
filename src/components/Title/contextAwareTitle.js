import React from 'react';
import { useLocation } from 'react-router-dom';

const contextAwareTitle = (Component) => () => {
  const location = useLocation();

  return (
    <Component prominent={location.pathname === '/'} />
  );
};

export default contextAwareTitle;
