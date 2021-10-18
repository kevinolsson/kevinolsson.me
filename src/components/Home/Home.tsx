import React from "react";
import PropTypes from "prop-types";
import { Meta } from "../Meta/Meta";
import { useSelector } from "react-redux";
// import { dateFormatted } from "util/date";
import { ProjectPreview, IProject } from "../ProjectPreview/ProjectPreview";
import { IgnoreLayoutWrapper } from "../IgnoreLayoutWrapper/IgnoreLayoutWrapper";
import { Box } from "@material-ui/core";
import { MDX } from "../MDX/MDX";

interface IHome {
  showProjectPreview: boolean;
}

export const Home = ({ showProjectPreview }: IHome) => {
  const { settings } = useSelector((state: { settings: any }) => state);
  const { siteDescription } = settings;

  // let thumbnails = [];
  // projects.map(({ type, value, name, ...everythingElse }, index) => {
  //   const url = type === "external" ? value : `/projects/${name}`;
  //   return (thumbnails[index] = {
  //     url,
  //     type,
  //     value,
  //     name,
  //     ...everythingElse
  //   });
  // });

  const thumbnails = [
    {
      title: "Citihub - Branding & Web Design",
      thumbnail: "images/uploads/thumbnail-citihub.jpg",
      url:
        "https://www.behance.net/gallery/44986527/Citihub-Branding-Web-Design",
      type: "external"
    },
    {
      title: "Prime Cut - Meat shop",
      thumbnail: "images/uploads/thumbnail-primecut.jpg",
      url: "https://www.behance.net/gallery/44985357/Prime-Cut-Meat-shop",
      type: "external"
    },
    {
      title: "Esalin - Filipino based translation",
      thumbnail: "images/uploads/thumbnail-esalin.jpg",
      url:
        "https://www.behance.net/gallery/45094481/Esalin-Filipino-based-translation",
      type: "external"
    },
    {
      title: "Puerto - Tapas Vino",
      thumbnail: "/images/uploads/thumbnail-puerto.jpg",
      url: "https://www.behance.net/gallery/45046867/Puerto-Tapas-Vino",
      type: "external"
    }
  ] as IProject;

  return (
    <React.Fragment>
      <Meta title={siteDescription} />
      {showProjectPreview && Array.isArray(thumbnails) && !!thumbnails.length && (
        <IgnoreLayoutWrapper>
          <Box marginBottom={16}>
            <ProjectPreview
              projects={thumbnails.sort((a: any, b: any) => {
                return (new Date(b.date) as any) - (new Date(a.date) as any);
              })}
            />
          </Box>
        </IgnoreLayoutWrapper>
      )}
      <MDX filename={"2021-08-29-Test-MDX"} />;
      {/* <div>
        {Array.isArray(posts) &&
          !!posts.length &&
          posts
            .sort((a, b) => {
              return new Date(b.date) - new Date(a.date);
            })
            .map(
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
      </div> */}
    </React.Fragment>
  );
};

Home.defaultProps = {
  showProjectPreview: true
};

Home.propTypes = {
  showProjectPreview: PropTypes.bool
};
