/* eslint-disable import/no-webpack-loader-syntax */
import HelloWorldComponent from "!babel-loader!@mdx-js/loader!./2021-08-29-Test-MDX.mdx";

export type EnumFilename = "2021-08-29-Test-MDX";
export type EnumType = "blog" | "project";

/* 
  Blog -> Post that must contain an MDX filename && component
  Project -> Either a MDX filename && component or link 
*/

export interface IData {
  title: string;
  subtitle?: string;
  type: EnumType;
  category: [string];
  date: string;
  url: string;
  isExternal: boolean;
  filename?: EnumFilename;
  component?: any;
}

export const data: IData[] = [
  {
    title: "Hello World (again)",
    subtitle: "I rewrote my blog using TypeScript and threw in MDX!",
    type: "blog",
    category: ["Blog"],
    url: "2021-10-19-hello-world-again",
    isExternal: false,
    date: "August 29, 2021",
    filename: "2021-08-29-Test-MDX",
    component: HelloWorldComponent
  }
];
