import React from 'react';
import { useParams } from 'react-router-dom';
import { ErrorMessage } from 'components/ErrorMessage/ErrorMessage';

export const ProjectRouter = () => {
  const { projectSlug } = useParams();

  let Component = <div>Hello World {projectSlug}</div>;
  // // eslint-disable-next-line array-callback-return
  // projects.map((project) => {
  //   const slug = project.url.split('/')[2];
  //   if (slug === projectSlug && !!project.component) {
  //     const ProjectComponent = project.component;
  //     // eslint-disable-next-line react/jsx-props-no-spreading
  //     Component = <ProjectComponent/>;
  //   }
  // });

  return Component || <ErrorMessage code={404} />;
};