import React from "react";
import PropTypes from "prop-types";
import { Meta } from "../Meta/Meta";
import { useSelector } from "react-redux";
import { ISettings, TLegacyContent } from "../../data/interfaces";
import { ProjectPreview } from "../ProjectPreview/ProjectPreview";
import { IgnoreLayoutWrapper } from "../IgnoreLayoutWrapper/IgnoreLayoutWrapper";
import { Box } from "@material-ui/core";
import { useLegacyProjects } from "hooks/useLegacyProjects";
import { data } from "../../mdx/index";
import { BlogBlock } from "../BlogBlock/BlogBlock";
interface IHome {
  showProjectPreview: boolean;
}

export const Home = ({ showProjectPreview }: IHome): JSX.Element => {
  const { settings } = useSelector(
    (state: { settings: ISettings; projects: TLegacyContent[] }) => state
  );
  const { siteDescription } = settings;

  const projects = useLegacyProjects();
  const posts = data;

  return (
    <React.Fragment>
      <Meta title={siteDescription} />
      {showProjectPreview && Array.isArray(projects) && !!projects.length && (
        <IgnoreLayoutWrapper>
          <Box marginBottom={16}>
            <ProjectPreview
              projects={projects.sort((a: any, b: any) => {
                return (new Date(b.date) as any) - (new Date(a.date) as any);
              })}
            />
          </Box>
        </IgnoreLayoutWrapper>
      )}
      <div>
        {Array.isArray(posts) &&
          !!posts.length &&
          posts
            .sort((a, b) => {
              return (new Date(b.date) as any) - (new Date(a.date) as any);
            })
            .map(
              (post, index) =>
                !!post && (
                  <BlogBlock
                    key={index}
                    featured={index === 0}
                    title={post.title}
                    url={`/blog/${post.url}`}
                    body={post.subtitle}
                    date={post.date}
                  />
                )
            )}
      </div>
    </React.Fragment>
  );
};

Home.defaultProps = {
  showProjectPreview: true
};

Home.propTypes = {
  showProjectPreview: PropTypes.bool
};
