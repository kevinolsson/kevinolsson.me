import React from 'react';
import Helmet from 'react-helmet';
import DataContext from 'DataContext';
import Meta from 'components/Meta/Meta';

export const Head = () => {
  const { settings } = React.useContext(DataContext);
  const { siteTitle, siteUrl, socialMedia, headerScripts } = settings[0];

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
