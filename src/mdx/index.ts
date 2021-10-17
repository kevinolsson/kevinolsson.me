/* eslint-disable import/no-webpack-loader-syntax */
import HelloWorldComponent from "!babel-loader!@mdx-js/loader!./2021-08-29-Test-MDX.mdx";

export type EnumFilename = "2021-08-29-Test-MDX";
export type EnumType = "post" | "project" | "playground" | "link";

export interface IData {
  title: string;
  type: EnumType;
  category: [string];
  date: string;
  filename: EnumFilename;
  component: React.Component;
}

export const data = [
  {
    title: "Hello World",
    type: "post",
    category: ["blog"],
    date: "August 29, 2021",
    filename: "2021-08-29-Test-MDX",
    component: HelloWorldComponent
  }
];
