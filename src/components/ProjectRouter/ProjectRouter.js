import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';
import { ProjectPost } from 'components/ProjectPost/ProjectPost'
import DataContext from 'DataContext';

export const ProjectRouter = () => {
  const { projectSlug } = useParams();
  const { projects } = React.useContext(DataContext); 
  const project = projects.find((p) => p.name === projectSlug);

  if(!project) return <ErrorMessage code={404} />
  switch(project.type) {
    default: 
      return <ProjectPost title={project.title} body={project.body} />
  }

  // // eslint-disable-next-line array-callback-return
  // projects.map((project) => {
  //   const slug = project.url.split('/')[2];
  //   if (slug === projectSlug && !!project.component) {
  //     const ProjectComponent = project.component;
  //     // eslint-disable-next-line react/jsx-props-no-spreading
  //     Component = <ProjectComponent/>;
  //   }
  // });
};