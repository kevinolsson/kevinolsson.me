import React from "react";
import Helmet from "react-helmet";

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
      {absoluteImageUrl && (
        <meta property="og:image" content={absoluteImageUrl} />
      )}
    </Helmet>
  );
};
