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
  details: ["Stockhom, Sweden", "May 2019 - August 2021"],
  children: (
    <ul>
      <li>Developing Påmind's front-end using React, Redux, and Redux Saga.</li>
      <li>Writing tests using Jest and Enzyme</li>
      <li>
        Crafting UI components and molding the design system using Storybook.js
      </li>
      <li>
        A bunch of other cool stuff. I'm learning new things day by day!{" "}
        <span role="img" aria-label="emojis to show appreciation">
          💯🙌🏻
        </span>
      </li>
    </ul>
  )
};
