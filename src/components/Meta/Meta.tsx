import React from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { ISettings } from "../../data/interfaces";
interface IMeta {
  title?: string;
  url?: string;
  description?: string;
  thumbnail?: string;
  headerScripts?: string;
}

export const Meta = ({
  title,
  url,
  description,
  thumbnail,
  headerScripts
}: IMeta): JSX.Element => {
  const headerScriptsElement = document.head.querySelector("#headerScripts");
  if (headerScripts && headerScriptsElement) {
    headerScriptsElement.outerHTML = headerScripts;
  }

  const { settings } = useSelector((state: { settings: ISettings }) => state);

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:type" content="website" />}
      {url && <meta property="og:url" content={url} />}
      {thumbnail && <meta name="twitter:card" content="summary_large_image" />}
      <meta
        property="og:image"
        content={
          process.env.PUBLIC_URL + thumbnail ||
          process.env.PUBLIC_URL + settings.socialMedia.image
        }
      />
    </Helmet>
  );
};
