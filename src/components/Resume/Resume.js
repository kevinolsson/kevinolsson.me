import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import ResumeExperience from 'components/Resume/ResumeExperience';
import ResumeOther from 'components/Resume/ResumeOther';
import ResumeEducation from 'components/Resume/ResumeEducation';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: theme.spacing(8),
    [theme.breakpoints.up('md')]: {
      gridTemplateColumns: '60% 40%',
    },
  },
  introduction: {
    marginBottom: theme.spacing(4),
  },
  experience: {
    gridRowStart: '3',
    [theme.breakpoints.up('md')]: {
      gridRowStart: '2',
    },
  },
  other: {
    gridRowStart: '2',
  },
}), { name: 'resume' });

const Resume = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.introduction}>
        <Typography variant="body1">
        Passion for building things and collaborating with people.
        Has a degree in Computer Science. Based in Stockholm.
        Previously headed a design studio in Manila.
        You can download a
          {' '}
          <Link
            href="https://docs.google.com/document/d/1318YrMoWYcCMl-CE6q0R-yDoUZoTXWmleTqhrxeegOY/export?format=pdf"
            underline="always"
          >
PDF version of this page here.
          </Link>
        </Typography>
      </div>
      <div className={classes.experience}>
        <ResumeExperience />
      </div>
      <div className={classes.other}>
        <ResumeOther />
        <ResumeEducation />
      </div>
    </div>
  );
};

export default Resume;
