import React from 'react';
import PropTypes from 'prop-types';
import { Layout } from 'components/Layout/Layout';
import { Header } from 'components/Header/Header';
import { MobileNavigation } from 'components/MobileNavigation/MobileNavigation';


export const Wrapper = (props) => {
  const { children } = props;
  return (
    <>
      <MobileNavigation />
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