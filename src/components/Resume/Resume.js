import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { ResumeIntroduction } from 'components/Resume/ResumeIntroduction';
import { ResumeExperience } from 'components/Resume/ResumeExperience';
import { ResumeOther } from 'components/Resume/ResumeOther';
import { ResumeEducation } from 'components/Resume/ResumeEducation';
import Meta from 'components/Meta/Meta';

const useStyles = makeStyles(
  theme => ({
    root: {
      display: 'grid',
      gridTemplateColumns: '1fr',
      [theme.breakpoints.up('md')]: {
        gridColumnGap: theme.spacing(8),
        gridTemplateColumns: '60% 1fr'
      }
    },
    introduction: {
      marginBottom: theme.spacing(16)
    },
    experience: {
      gridRowStart: '3',
      [theme.breakpoints.up('md')]: {
        gridRowStart: '2'
      }
    },
    other: {
      gridRowStart: '2'
    }
  }),
  { name: 'resumeGrid' }
);

export const Resume = () => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Meta title={'Resume'} />
      <div className={classes.root}>
        <div className={classes.introduction}>
          <ResumeIntroduction />
        </div>
        <div className={classes.experience}>
          <ResumeExperience />
        </div>
        <div className={classes.other}>
          <ResumeOther />
          <ResumeEducation />
        </div>
      </div>
    </React.Fragment>
  );
};
