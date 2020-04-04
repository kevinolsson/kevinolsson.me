import React from 'react';
import Meta from 'components/Meta/Meta'
import DataContext from 'DataContext';
import { BlogBlock } from 'components/BlogBlock/BlogBlock'
import { dateFormatted } from 'util/date';
import { ProjectPreview } from 'components/ProjectPreview/ProjectPreview';
import { IgnoreLayoutWrapper } from 'components/IgnoreLayoutWrapper/IgnoreLayoutWrapper';
import { Box } from '@material-ui/core'

export const Home = () => {
  const { posts, settings, projects } = React.useContext(DataContext); 
  const { siteDescription } = settings[0];

  let thumbnails = [];
  projects.map(({title, thumbnail, type, value, name}, index) => {
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
      <Meta title={siteDescription} />
      { Array.isArray(thumbnails) && !!thumbnails.length && (
        <IgnoreLayoutWrapper>
          <Box marginBottom={16}>
            <ProjectPreview projects={thumbnails.reverse()} />
          </Box>
        </IgnoreLayoutWrapper>
      )}
      <div>
        { Array.isArray(posts) && !!posts.length && posts.map((post, index) => !!post && (
          <BlogBlock
            key={index}
            featured={index === 0}
            title={post.title}
            url={`/blog/${post.name}`}
            body={post.subtitle}
            date={dateFormatted(post.date)}
          />
        ))}
      </div>
    </React.Fragment>
  );
};