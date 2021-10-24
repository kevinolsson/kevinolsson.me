/* eslint-disable import/no-webpack-loader-syntax */
import MdxComponent202003271 from "!babel-loader!@mdx-js/loader!./2020-03-27-hello-world.mdx";
import MdxComponent202004101 from "!babel-loader!@mdx-js/loader!./2020-04-10-i-finally-built-myself-a-blog.mdx";
import MdxComponent202009161 from "!babel-loader!@mdx-js/loader!./2020-09-16-mid-year-show-and-tell.mdx";
import MdxComponent202110241 from "!babel-loader!@mdx-js/loader!./2021-10-24-rebuilt-blog-typescript-mdx-storybook.mdx";

export type EnumFilename =
  | "2020-03-27-hello-world"
  | "2020-04-10-i-finally-built-myself-a-blog"
  | "2020-09-16-mid-year-show-and-tell"
  | "2021-10-24-rebuilt-blog-typescript-mdx-storybook";
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
    filename: "2020-03-27-hello-world",
    component: MdxComponent202003271
  },
  {
    title: "I finally built myself a blog 😅",
    subtitle: "Hi. New blog who this?",
    type: "blog",
    category: ["Blog"],
    url: "2020-04-10-i-finally-built-myself-a-blog",
    isExternal: false,
    date: "April 10, 2020",
    filename: "2020-04-10-i-finally-built-myself-a-blog",
    component: MdxComponent202004101
  },
  {
    title: "Mid-year show and tell.",
    subtitle: "Writing is hard. I should write more.",
    type: "blog",
    category: ["Blog"],
    url: "2020-09-16-mid-year-show-and-tell",
    isExternal: false,
    date: "September 16, 2020",
    filename: "2020-09-16-mid-year-show-and-tell",
    component: MdxComponent202009161
  },

  /* Blog posts starts from here */
  {
    title: "A long overdue update to this website!",
    subtitle: "So I rebuilt my blog using TypeScript, MDX, and Storybook",
    type: "blog",
    category: ["Blog"],
    url: "2021-10-24-rebuilt-blog-typescript-mdx-storybook",
    isExternal: false,
    date: "August 29, 2021",
    filename: "2021-10-24-rebuilt-blog-typescript-mdx-storybook",
    component: MdxComponent202110241
  }
];
