import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Link from '@material-ui/core/Link';

const useStyles = makeStyles((theme) => ({
  root: {
    marginBottom: theme.spacing(16),
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'auto 1fr',
    gridGap: theme.spacing(4),

  },
  avatar: {
    width: '48px',
    height: '48px',
    [theme.breakpoints.up('md')]: {
      width: '80px',
      height: '80px',
    },
  },
}), { name: 'resumeEducation' });

const ResumeEducation = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography gutterBottom variant="h4">
        Education
      </Typography>
      <div className={classes.grid}>
        <Avatar className={classes.avatar} alt="De La Salle University" src={`${process.env.PUBLIC_URL}/images/dlsu.jpg`} />
        <Typography variant="body1" component="div">
          <Box marginBottom={4}>
            <Box marginBottom={-1} fontWeight="fontWeightBold">
              De La Salle University
            </Box>
            Manila, Philippines
          </Box>
          <Box marginBottom={4}>
            BS Computer Science. Majored in Network Engineering 2015
          </Box>
          <Box marginBottom={4}>
            <strong>Awards:</strong>
            {' '}
            Most outstanding thesis:
            {' '}
            <Link
              underline="always"
              color="primary"
              href="https://github.com/mixxorz/potator"
            >
              A Tor-based distributed VPN network system (Potator)
            </Link>

          </Box>
        </Typography>
      </div>
    </div>
  );
};

export default ResumeEducation;
