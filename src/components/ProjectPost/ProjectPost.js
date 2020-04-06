import React from 'react';
import PropTypes from 'prop-types';
import Content from 'components/Content/Content';

export const ProjectPost = ({ body }) => <Content src={body} />;

ProjectPost.propTypes = {
  body: PropTypes.string
};
