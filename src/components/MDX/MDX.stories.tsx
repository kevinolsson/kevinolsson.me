import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { data } from "mdx/";
import { MDX } from "./MDX";

export default {
  title: "Content/MDX",
  component: MDX
} as ComponentMeta<typeof MDX>;

const Template: ComponentStory<typeof MDX> = args => <MDX {...args} />;

export const Post0 = Template.bind({});
Post0.storyName = data[0].file;
Post0.args = {
  file: "2021-08-29-Test-MDX"
};
