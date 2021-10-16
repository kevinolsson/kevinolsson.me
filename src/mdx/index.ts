/* eslint-disable import/no-webpack-loader-syntax */
import HelloWorldComponent from "!babel-loader!@mdx-js/loader!./2021-08-29-Test-MDX.mdx";

export type EnumFilename = "2021-08-29-Test-MDX";

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
