import React from 'react';
import PropTypes from 'prop-types';
import { getImageSrc, getImageSrcset } from 'util/getImageUrl';

export const ImageWithSrcset = ({ nodeKey, src, alt, ...props }) => {
  const decodedSrc = decodeURI(src);
  return (
    <img
      className="Content--Image"
      {...props}
      src={getImageSrc(decodedSrc)}
      srcSet={getImageSrcset(decodedSrc)}
      alt={alt}
    />
  );
};

ImageWithSrcset.propTypes = {
  nodeKey: PropTypes.any,
  src: PropTypes.string,
  alt: PropTypes.string
};
