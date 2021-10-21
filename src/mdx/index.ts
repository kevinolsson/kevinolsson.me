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
  /* The first 3 objects are legacy blog posts that I've recreated in MDX */
  {
    title: "Hello World",
    subtitle: "Finally got NetlifyCMS working with this site ❤️",
    type: "blog",
    category: ["Blog"],
    url: "2020-03-27-hello-world",
    isExternal: false,
    date: "March 27, 2020",
    filename: "2021-08-29-Test-MDX",
    component: HelloWorldComponent
  },
  {
    title: "I finally built myself a blog 😅",
    subtitle: "Hi. New blog who this?",
    type: "blog",
    category: ["Blog"],
    url: "2020-04-10-i-finally-built-myself-a-blog",
    isExternal: false,
    date: "April 10, 2020",
    filename: "2021-08-29-Test-MDX",
    component: HelloWorldComponent
  },
  {
    title: "Mid-year show and tell.",
    subtitle: "Writing is hard. I should write more.",
    type: "blog",
    category: ["Blog"],
    url: "2020-09-16-mid-year-show-and-tell",
    isExternal: false,
    date: "September 16, 2020",
    filename: "2021-08-29-Test-MDX",
    component: HelloWorldComponent
  },

  /* Blog posts starts from here */
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
