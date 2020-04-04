import React from 'react';
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';
import { ThumbnailGrid } from 'components/ThumbnailGrid/ThumbnailGrid';

export const Projects = () => {
  const { projects } = React.useContext(DataContext);
  let thumbnails = [];
  projects.map(({thumbnail, type, value, name, title}, index) => {
    const url = type === 'external' ? value : `/projects/${name}`;
    return thumbnails[index] = {
      title,
      thumbnail,
      type,
      url
    }
  })
  return (
    <React.Fragment>
      <Meta title={"Projects"} />
      <div>
        <ThumbnailGrid thumbnails={thumbnails.reverse()} />
      </div>
    </React.Fragment>

  );
};