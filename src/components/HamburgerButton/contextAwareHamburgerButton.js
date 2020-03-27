import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

export const contextAwareHamburgerButton = (Component) => ({ active, handleClickCallback }) => {
  const history = useHistory();
  const back = history.location.key ? history.goBack : '/';

  const pathname = history.location.pathname.split('/');
  const isNestedPage = !!pathname[2];



  return (
    <Component
      showBack={isNestedPage && !active}
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