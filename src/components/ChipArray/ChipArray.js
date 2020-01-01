import React from 'react';
import PropTypes from 'prop-types';
import Chip from '@material-ui/core/Chip';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'left',
    flexWrap: 'wrap',
  },
  chip: {
    borderRadius: theme.spacing(),
    borderColor: theme.palette.portfolio.dark,
    color: theme.palette.portfolio.dark,
    padding: theme.spacing(),
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
    ...theme.typography.body2,
  },
  icon: {
    fill: theme.palette.portfolio.pink,
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}), { name: 'chipArray' });

const ChipArray = ({ label, ChipProps }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      { label.map((l, index) => {
        const isArray = Array.isArray(l);
        const text = isArray ? l[0] : l;
        const icon = isArray ? l[1] : undefined;
        return (
          <Chip
            classes={{
              root: classes.chip,
              icon: classes.icon,
            }}
            key={index}
            variant="outlined"
            label={text}
            icon={icon}
          // eslint-disable-next-line react/jsx-props-no-spreading
            {...ChipProps}
          />
        );
      }) }
    </div>
  );
};

ChipArray.defaultProps = {
  label: [],
  ChipProps: {},
};

ChipArray.propTypes = {
  label: PropTypes.arrayOf(
    PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.array,
    ]),
  ),
  // eslint-disable-next-line react/forbid-prop-types
  ChipProps: PropTypes.object,
};

export default ChipArray;
