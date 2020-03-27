import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';

export const contextAwareHamburgerButton = (Component) => ({ active, handleClickCallback }) => {
  const trigger = useScrollTrigger({
    threshold: 164
  });

  const history = useHistory();
  const back = history.location.key ? history.goBack : '/';
  const pathname = history.location.pathname.split('/');
  const isNestedPage = !!pathname[2];

  return (
    <Component
      showBack={isNestedPage && !active && trigger}
      back={back}
      handleClickCallback={handleClickCallback}
      active={active}
    />
  );
};

contextAwareHamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined,
};

contextAwareHamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func,
}; 