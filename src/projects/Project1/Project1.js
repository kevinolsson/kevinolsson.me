import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(
  () => ({
    root: {},
  }),
  { name: 'Project1' },
);

const Project1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      This is project 1
    </div>
  );
};

export default Project1;
