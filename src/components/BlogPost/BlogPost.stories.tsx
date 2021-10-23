import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogPost } from "./BlogPost";
import { data } from "../../mdx/index";

export default {
  title: "Content/Blog",
  component: BlogPost
} as ComponentMeta<typeof BlogPost>;

const Template: ComponentStory<typeof BlogPost> = args => (
  <BlogPost {...args} />
);

export const Post0 = Template.bind({});
Post0.storyName = `${data[0].title} - ${data[0].date}`;
Post0.args = {
  slug: data[0].url
};
export const Post1 = Template.bind({});
Post1.storyName = `${data[1].title} - ${data[1].date}`;
Post1.args = {
  slug: data[1].url
};
export const Post2 = Template.bind({});
Post2.storyName = `${data[2].title} - ${data[2].date}`;
Post2.args = {
  slug: data[2].url
};
export const Post3 = Template.bind({});
Post3.storyName = `${data[3].title} - ${data[3].date}`;
Post3.args = {
  slug: data[3].url
};
