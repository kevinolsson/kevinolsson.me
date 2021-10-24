import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { BlogBlock } from "./BlogBlock";

export default {
  title: "Components/BlogBlock",
  component: BlogBlock
} as ComponentMeta<typeof BlogBlock>;

const Template: ComponentStory<typeof BlogBlock> = args => (
  <BlogBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Hello World",
  date: "October 21, 2021",
  body: "This is the subtitle part of the BlogBlock.",
  url: "/",
  featured: false
};

export const Featured = Template.bind({});
Featured.args = {
  title: "Featured Hello World",
  date: "October 21, 2021",
  body: "This is how the BlogBlock looks when featured is set to true.",
  url: "/",
  featured: true
};
