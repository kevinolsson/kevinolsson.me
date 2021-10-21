import React from "react";
import Helmet from "react-helmet";
import { useSelector } from "react-redux";
import { Meta } from "../Meta/Meta";
import { ISettings } from "../../data/interfaces";

export const Head = () => {
  const { settings } = useSelector((state: { settings: ISettings }) => state);
  const { siteTitle, siteUrl, socialMedia, headerScripts } = settings;

  return (
    <React.Fragment>
      <Helmet defaultTitle={siteTitle} titleTemplate={`${siteTitle} | %s`} />
      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMedia && socialMedia.image && siteUrl + socialMedia.image
        }
      />
    </React.Fragment>
  );
};
