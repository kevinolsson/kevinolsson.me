import React from 'react';
import Meta from 'components/Meta/Meta';
import DataContext from 'DataContext';
import { ThumbnailGrid } from 'components/ThumbnailGrid/ThumbnailGrid';

export const Projects = () => {
  const { projects } = React.useContext(DataContext);
  let thumbnails = [];
  projects.map(({ type, value, name, ...everythingElse }, index) => {
    const url = type === 'external' ? value : `/projects/${name}`;
    return (thumbnails[index] = {
      url,
      type,
      value,
      name,
      ...everythingElse
    });
  });

  return (
    <React.Fragment>
      <Meta title={'Projects'} />
      <div>
        <ThumbnailGrid
          thumbnails={thumbnails.sort((a, b) => {
            return new Date(b.date) - new Date(a.date);
          })}
        />
      </div>
    </React.Fragment>
  );
};
