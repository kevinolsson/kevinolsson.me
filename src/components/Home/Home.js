import React from 'react';
import PropTypes from 'prop-types';
import Meta from 'components/Meta/Meta';
import DataContext from 'DataContext';
import { BlogBlock } from 'components/BlogBlock/BlogBlock';
import { dateFormatted } from 'util/date';
import { ProjectPreview } from 'components/ProjectPreview/ProjectPreview';
import { IgnoreLayoutWrapper } from 'components/IgnoreLayoutWrapper/IgnoreLayoutWrapper';
import { Box } from '@material-ui/core';

export const Home = ({preview}) => {
  const { posts, settings, projects } = React.useContext(DataContext);
  const { siteDescription } = settings[0];

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
      <Meta title={siteDescription} />
      {preview && Array.isArray(thumbnails) && !!thumbnails.length && (
        <IgnoreLayoutWrapper>
          <Box marginBottom={16}>
            <ProjectPreview
              projects={thumbnails.sort((a, b) => {
                return new Date(b.date) - new Date(a.date);
              })}
            />
          </Box>
        </IgnoreLayoutWrapper>
      )}
      <div>
        {Array.isArray(posts) &&
          !!posts.length &&
          posts.map(
            (post, index) =>
              !!post && (
                <BlogBlock
                  key={index}
                  featured={index === 0}
                  title={post.title}
                  url={`/blog/${post.name}`}
                  body={post.subtitle}
                  date={dateFormatted(post.date)}
                />
              )
          )}
      </div>
    </React.Fragment>
  );
};

Home.defaultProps = {
  preview: true
};

Home.propTypes = {
  preview: PropTypes.bool
};
