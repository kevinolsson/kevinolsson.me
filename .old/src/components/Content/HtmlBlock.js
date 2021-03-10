import React from 'react';
import PropTypes from 'prop-types';

export const HtmlBlock = ({ value }) => {
  if (value.indexOf('<iframe') !== 0) return value;
  return (
    <div
      className={`Content--Iframe`}
      dangerouslySetInnerHTML={{
        __html: value
      }}
    />
  );
};

HtmlBlock.propTypes = {
  value: PropTypes.string
};
