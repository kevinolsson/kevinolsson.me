export interface ISettings {
  siteUrl: string;
  siteTitle: string;
  siteDescription: string;
  socialMediaCard: {
    image?: string;
    twitterCreatorAccount?: string;
    twitterSiteAccount?: string;
  };
  headerScripts?: string;
  enableServiceWorker?: boolean;
  displayPhoto?: string;
  socialMedia: {
    image?: string;
    linkedIn?: string;
    twitter?: string;
  };
  storybook?: string;
}

export type TLegacyContent = {
  content: string;
  isEmpty: boolean;
  excerpt: string;
  title: string;
  date: string;
  subtitle: string;
  name: string;
  body: string;
  type: string;
  value: string;
};
