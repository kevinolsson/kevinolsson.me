import React from 'react';
import PropTypes from 'prop-types';
const rrd = require('react-router-dom');
// Just render plain div with its children
rrd.BrowserRouter = ({ children }) => <div>{children}</div>;
module.exports = rrd;

rrd.BrowserRouter.propTypes = {
  children: PropTypes.node
};
