import React from "react";
import { Meta } from "../Meta/Meta";
import { ThumbnailGrid } from "../ThumbnailGrid/ThumbnailGrid";
import { useLegacyProjects } from "../../hooks/useLegacyProjects";

export const Projects = (): JSX.Element => {
  const projects = useLegacyProjects();

  return (
    <React.Fragment>
      <Meta title={"Projects"} />
      <div>
        <ThumbnailGrid
          thumbnails={projects.sort((a, b) => {
            return (new Date(b.date) as any) - (new Date(a.date) as any);
          })}
        />
      </div>
    </React.Fragment>
  );
};
