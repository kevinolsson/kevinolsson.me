import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/Layout/Layout';

export const Wrapper = (props) => {
  const { children } = props;
  return (
    <>
      {/* <MobileNavigation /> */}
      <Layout>
        {/* <Header /> */}
        {children}
      </Layout>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};