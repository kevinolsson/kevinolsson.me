import React from 'react';
import ProjectPreview from 'components/ProjectPreview/ProjectPreview';
import BlogBlock from 'components/BlogBlock/BlogBlock';
import IgnoreLayoutWrapper from 'components/IgnoreLayoutWrapper/IgnoreLayoutWrapper';
import { blogs } from 'blogs';
import { projects } from 'projects';

const Home = () => (
  <div>
    <IgnoreLayoutWrapper>
      <ProjectPreview projects={projects} />
    </IgnoreLayoutWrapper>
    {!!blogs.length && blogs.map((blog, index) => !!blog && (
    <BlogBlock
      key={index}
      featured={index === 0}
      title={blog.title}
      url={`/blog/${blog.slug}`}
      body={blog.subtitle}
      date={blog.date}
    />
    ))}
  </div>
);

export default Home;
