import React from "react";
import { Layout } from "../Layout/Layout";
import { Header } from "../Header/Header";
import { MobileNavigation } from "../MobileNavigation/MobileNavigation";

interface IAppWrapper {
  children: React.ReactNode;
}

export const AppWrapper = ({ children }: IAppWrapper): JSX.Element => (
  <React.Fragment>
    <MobileNavigation />
    <Layout>
      {<Header />}
      {children}
    </Layout>
  </React.Fragment>
);
