import { useSelector } from "react-redux";
import { TLegacyContent } from "../data/interfaces";

export const useLegacyProjects = (): TLegacyContent[] => {
  const { projects } = useSelector(
    (state: { projects: TLegacyContent[] }) => state
  );

  const thumbnails: any[] = [];
  projects.forEach(({ type, value, name, ...everythingElse }, index) => {
    const url = type === "external" ? value : `/projects/${name}`;
    return (thumbnails[index] = {
      url,
      type,
      value,
      name,
      ...everythingElse
    } as any);
  });

  return thumbnails;
};
