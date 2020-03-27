import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';

export const Wrapper = (props) => {
  const { children } = props;
  return (
    <>
      <Layout>
        {<Header />}
        {children}
      </Layout>
    </>
  );
};

Wrapper.propTypes = {
  children: PropTypes.node.isRequired,
};