/* eslint-disable import/no-webpack-loader-syntax */
import TestMDX from "!babel-loader!@mdx-js/loader!../../mdx/2021-08-29-Test-MDX.mdx";

export const mdxMapping = [
  {
    file: "2021-08-29-Test-MDX",
    component: TestMDX
  }
];
