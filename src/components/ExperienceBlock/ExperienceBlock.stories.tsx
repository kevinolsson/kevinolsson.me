import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ExperienceBlock } from "./ExperienceBlock";

export default {
  title: "Components/ExperienceBlock",
  component: ExperienceBlock
} as ComponentMeta<typeof ExperienceBlock>;

const Template: ComponentStory<typeof ExperienceBlock> = args => (
  <ExperienceBlock {...args} />
);

export const Default = Template.bind({});
Default.args = {
  avatar: `${process.env.PUBLIC_URL}/images/pamind.jpg`,
  company: "Påmind AB",
  position: "Front-end developer",
  details: ["Stockhom, Sweden", "May 2019 - August 2021"]
};
