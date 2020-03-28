import React from 'react';
import { Button } from 'components/Button/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Content from 'components/Content/Content';
import Meta from 'components/Meta/Meta'
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

export const ProjectPost = ({title, body}) => (
    <div>
      <Meta title={title} />
      <Button
        component={Link}
        to="/projects"
        startIcon={<ArrowBackIcon />}
      >
        Back to projects
      </Button>
      <Typography gutterBottom variant="h1">{title}</Typography>
      <Content src={body} />
    </div>
  )