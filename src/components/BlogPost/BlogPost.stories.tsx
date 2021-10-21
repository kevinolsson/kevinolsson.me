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
