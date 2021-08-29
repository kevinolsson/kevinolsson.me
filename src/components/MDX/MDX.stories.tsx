import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { mdxMapping } from "./mdxMapping";
import { MDX } from "./MDX";

export default {
  title: "Content/MDX",
  component: MDX
} as ComponentMeta<typeof MDX>;

const Template: ComponentStory<typeof MDX> = args => <MDX {...args} />;

export const Post0 = Template.bind({});
Post0.storyName = mdxMapping[0].file;
Post0.args = {
  file: mdxMapping[0].file
};
