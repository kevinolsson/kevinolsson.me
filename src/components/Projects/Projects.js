/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { projects } from 'projects';
import Thumbnail from 'components/Thumbnail/Thumbnail';

const useStyles = makeStyles(
  (theme) => ({
    root: {},
    grid: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        gridTemplateColumns: 'repeat(3, 1fr)',
      },
    },
    gridItem: {
      height: theme.spacing(48),
    },
  }),
  { name: 'Projects' },
);

const Projects = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.grid}>
        { projects.map((project, index) => (
          <div key={index} className={classes.gridItem}>
            <Thumbnail {...project} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
