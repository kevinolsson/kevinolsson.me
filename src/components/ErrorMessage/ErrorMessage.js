import React from 'react';
import PropTypes from 'prop-types';

export const ErrorMessage = ({code}) => {
  return (
    <div>
      {code}
    </div>
  );
};

ErrorMessage.propTypes = {
  code: PropTypes.number.isRequired,
};