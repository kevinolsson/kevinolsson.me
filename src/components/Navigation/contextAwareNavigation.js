import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import TwitterIcon from 'components/Icons/TwitterIcon';
import LinkedInIcon from 'components/Icons/LinkedInIcon';
import DataContext from 'DataContext';

export const contextAwareNavigation = Component => ({
  view,
  handleClickCallback
}) => {
  const location = useLocation();
  const pathname = location.pathname.split('/');
  const active = `/${pathname[1]}`;
  const { settings } = React.useContext(DataContext);
  const { twitter, linkedIn } = settings[0].socialMedia;

  const withEdgeCase = a => (a === '/blog' ? '/' : a);

  const menu = [
    { name: 'Blog', url: '/' },
    { name: 'Projects', url: '/projects' },
    { name: 'Resume', url: '/resume' },
    { name: 'Contact', url: '/contact' },
    { name: <TwitterIcon />, url: twitter, external: true },
    { name: <LinkedInIcon />, url: linkedIn, external: true }
  ];
  return (
    <Component
      active={withEdgeCase(active)}
      menu={menu}
      view={view}
      handleClickCallback={handleClickCallback}
    />
  );
};

contextAwareNavigation.defaultProps = {
  view: 'desktop',
  handleClickCallback: undefined
};

contextAwareNavigation.propTypes = {
  view: PropTypes.oneOf(['desktop', 'mobile']),
  handleClickCallback: PropTypes.func
};
