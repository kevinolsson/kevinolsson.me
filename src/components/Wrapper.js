import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <div>
      Outside the layout
      <Layout>{children}</Layout>
    </div>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
