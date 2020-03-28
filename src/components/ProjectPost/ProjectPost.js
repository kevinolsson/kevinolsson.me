import React from 'react';
import { Button } from 'components/Button/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Content from 'components/Content/Content';
import Meta from 'components/Meta/Meta'
import { Link } from 'react-router-dom';

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
      <div style={{ maxWidth: '540px' }}>
        <Content src={body} />
      </div>
    </div>
  )