import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Title } from 'components/Title/Title';
import { Navigation } from 'components/Navigation/Navigation';
import { contextAwareNavigation } from 'components/Navigation/contextAwareNavigation';
import { contextAwareTitle } from 'components/Title/contextAwareTitle';

const ContextAwareNavigation = contextAwareNavigation(Navigation);
const ContextAwareTitle = contextAwareTitle(Title);

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr 1px',
      marginBottom: theme.spacing(8),
      [theme.breakpoints.up('md')]: {
        gridGap: theme.spacing(4),
        gridTemplateColumns: '1fr auto'
      }
    },
    navigation: {
      minWidth: '64px',
      position: 'relative',
      left: '-64px',
      [theme.breakpoints.up('md')]: {
        position: 'unset',
        left: 0
      }
    }
  }),
  { name: 'header' }
);

export const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContextAwareTitle />
      <div className={classes.navigation}>
        <ContextAwareNavigation view="desktop" />
      </div>
    </div>
  );
};
