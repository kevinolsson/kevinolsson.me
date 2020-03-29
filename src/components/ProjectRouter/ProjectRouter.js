import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ProjectPost } from 'components/ProjectPost/ProjectPost'
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';

const determineComponent = component => {
  switch(component) {
    // add components here
    default:
      return <ErrorMessage code={404} />
  }
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
      <React.Fragment>
        <Meta title={project.title} />
        <Component />
      </React.Fragment>
      )
    }
    default: {
      return (
        <React.Fragment>
          <Meta title={project.title} />
          <ProjectPost title={project.title} body={project.body} />
          </React.Fragment>
      )
    }
  }
};