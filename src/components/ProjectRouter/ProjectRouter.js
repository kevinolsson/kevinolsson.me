import React from 'react';
import PropTypes from 'prop-types';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ProjectPost } from 'components/ProjectPost/ProjectPost'
import { Button } from 'components/Button/Button';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';
import { Link, useParams, useLocation } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const determineComponent = component => {
  switch(component) {
    // add components here
    default:
      return <ErrorMessage code={404} />
  }
}

const Wrapper = ({ children, title }) => {
  const location = useLocation()
  const { search: fromHomepage } = location;

  return (
  <React.Fragment>
    <Meta title={title} />
    <Button
      component={Link}
      to={fromHomepage ? "/" : "/projects"}
      startIcon={<ArrowBackIcon />}
    >
      {`Back to ${fromHomepage ? 'blog' : 'projects'}`}
    </Button>
    <Typography gutterBottom variant="h1">{title}</Typography>
    <div>
      { children}
    </div>
  </React.Fragment>
)}

Wrapper.propTypes = {
  children: PropTypes.node,
  title: PropTypes.string,
}

export const ProjectRouter = () => {
  const { projectSlug } = useParams();
  const { projects } = React.useContext(DataContext); 
  const project = projects.find((p) => p.name === projectSlug);

  if(!project) return <ErrorMessage code={404} />
  switch(project.type) {
    case 'component': {
      const Component = determineComponent(project.value)
      return (
      <Wrapper title={project.title}>
        <Component />
      </Wrapper>
      )
    }
    default: {
      return (
        <Wrapper title={project.title}>
          <ProjectPost body={project.body} />
        </Wrapper>
      )
    }
  }
};
