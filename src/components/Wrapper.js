import React from 'react';
import PropTypes from 'prop-types';
import Layout from './Layout/Layout';

const Wrapper = (props) => {
  const { children } = props;
  return (
    <>
      <Layout>{children}</Layout>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Wrapper;
