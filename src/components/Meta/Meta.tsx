import React from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { ISettings } from "../../data/interfaces";
interface IMeta {
  title?: string;
  url?: string;
  description?: string;
  absoluteImageUrl?: string;
  headerScripts?: any;
}

export const Meta = ({
  title,
  url,
  description,
  absoluteImageUrl,
  headerScripts
}: IMeta) => {
  const headerScriptsElement = document.head.querySelector("#headerScripts");
  if (headerScripts && headerScriptsElement) {
    headerScriptsElement.outerHTML = headerScripts;
  }

  const { settings } = useSelector((state: { settings: ISettings }) => state);
  const { siteTitle, siteUrl, socialMedia } = settings || {};

  const ogImage = absoluteImageUrl || siteUrl + socialMedia?.image;

  return (
    <Helmet>
      {title && <title>{title}</title>}
      {title && <meta property="og:title" content={title} />}
      {description && <meta name="description" content={description} />}
      {description && <meta property="og:description" content={description} />}
      {url && <meta property="og:type" content="website" />}
      {url && <meta property="og:url" content={url} />}
      {absoluteImageUrl && (
        <meta name="twitter:card" content="summary_large_image" />
      )}
      <meta property="og:image" content={ogImage} />
    </Helmet>
  );
};
