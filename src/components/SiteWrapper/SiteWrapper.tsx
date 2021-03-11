import React from "react";
import { ScrollToTop } from "components/ScrollToTop/ScrollToTop";
import { Layout } from "ui-components/Layout/Layout";

type Props = {
  children: JSX.Element;
};

export const SiteWrapper = ({ children }: Props) => (
  <React.Fragment>
    <ScrollToTop />
    <Layout>{children}</Layout>
  </React.Fragment>
);
