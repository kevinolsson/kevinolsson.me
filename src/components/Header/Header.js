import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Title from 'components/Title/Title';
import Navigation from 'components/Navigation/Navigation';
import contextAwareNavigation from 'components/Navigation/contextAwareNavigation';
import contextAwareTitle from 'components/Title/contextAwareTitle';

const ContextAwareNavigation = contextAwareNavigation(Navigation);
const ContextAwareTitle = contextAwareTitle(Title);

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr auto',
    gridGap: theme.spacing(4),
    marginBottom: theme.spacing(16),
  },
}), { name: 'header' });

const Header = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <ContextAwareTitle />
      <ContextAwareNavigation view="desktop" />
    </div>
  );
};

export default Header;
