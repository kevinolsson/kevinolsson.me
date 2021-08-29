/* eslint-disable import/no-webpack-loader-syntax */
import TestMDX from "!babel-loader!@mdx-js/loader!./2021-08-29-Test-MDX.mdx";

export type EnumData = "2021-08-29-Test-MDX";
export const data = [
  {
    file: "2021-08-29-Test-MDX",
    component: TestMDX
  }
];
