import React from 'react';
import PropTypes from 'prop-types';
import Box from '@material-ui/core/Box';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import { Link } from 'react-router-dom';
import { HamburgerIcon } from 'components/HamburgerIcon/HamburgerIcon';


export const HamburgerButton = ({
  handleClickCallback, active, forceMobileView, back, showBack,
}) => {
  const [backActive, setBackActive] = React.useState(false);

  const handleClick = () => {
    if (handleClickCallback) {
      handleClickCallback();
    }
  };

  const Component = typeof back === 'string' ? Link : Box;

  React.useEffect(() => {
    setBackActive(back && showBack);
  }, [back, showBack]);

  return (
    <div>
      <button
        type="button"
        label="menu"
        onClick={handleClick}
        // className={[
        //   classes.button,
        //   active && classes.buttonActive,
        // ].filter(Boolean).join(' ')}
      >
        <HamburgerIcon active={active} />
      </button>
      { back && (
        <Component
          to={typeof back === 'string' ? back : undefined}
          onClick={typeof back === 'function' ? (() => { back(); }) : undefined}
          // className={[
          //   classes.button,
          //   classes.buttonBack,
          //   backActive && classes.buttonBackActive,
          // ].filter(Boolean).join(' ')}
        >
          <ArrowBackIcon />
        </Component>
      )}
    </div>
  );
};

HamburgerButton.defaultProps = {
  active: false,
  handleClickCallback: undefined,
  back: undefined,
  showBack: false,
  forceMobileView: false,
};

HamburgerButton.propTypes = {
  active: PropTypes.bool,
  handleClickCallback: PropTypes.func,
  back: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.func,
  ]),
  showBack: PropTypes.bool,
  forceMobileView: PropTypes.bool,
}; 