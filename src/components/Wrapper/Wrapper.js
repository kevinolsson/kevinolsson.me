import React from 'react';
import PropTypes from 'prop-types';

export const Wrapper = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired
};