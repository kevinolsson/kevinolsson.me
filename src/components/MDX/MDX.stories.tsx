import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { data } from "mdx/";
import { MDX } from "./MDX";

export default {
  title: "Components/MDX",
  component: MDX
} as ComponentMeta<typeof MDX>;

const Template: ComponentStory<typeof MDX> = args => <MDX {...args} />;

export const Post0 = Template.bind({});
Post0.storyName = data[0].filename;
Post0.args = {
  filename: "2021-10-24-rebuilt-blog-typescript-mdx-storybook"
};
