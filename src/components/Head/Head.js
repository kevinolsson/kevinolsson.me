import React from 'react';
import Helmet from 'react-helmet'
import DataContext from 'DataContext';
import Meta from 'components/Meta/Meta';
import ServiceWorkerNotifications from 'components/ServiceWorkerNotifications/ServiceWorkerNotifications';

export const Head = () => {
  const { settings } = React.useContext(DataContext); 
  const {
    siteTitle,
    siteUrl,
    socialMediaCard,
    headerScripts
  } = settings[0]

  return (
    <React.Fragment>
      <ServiceWorkerNotifications reloadOnUpdate />
      <Helmet
        defaultTitle={siteTitle}
        titleTemplate={`${siteTitle} | %s`}
      />
      <Meta
        headerScripts={headerScripts}
        absoluteImageUrl={
          socialMediaCard &&
          socialMediaCard.image &&
          siteUrl + socialMediaCard.image
        }
        twitterCreatorAccount={
          socialMediaCard && socialMediaCard.twitterCreatorAccount
        }
        twitterSiteAccount={
          socialMediaCard && socialMediaCard.twitterSiteAccount
        }
      />
    </React.Fragment>
  );
};