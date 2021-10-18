import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { Thumbnail } from "./Thumbnail";

export default {
  title: "Components/Thumbnail",
  component: Thumbnail
} as ComponentMeta<typeof Thumbnail>;

const Template: ComponentStory<typeof Thumbnail> = args => (
  <Thumbnail {...args} />
);

export const Default = Template.bind({});
Default.args = {
  standalone: true,
  title: "Citihub - Branding & Web Design",
  thumbnail: "images/uploads/thumbnail-citihub.jpg",
  url: "https://www.behance.net/gallery/44986527/Citihub-Branding-Web-Design",
  type: "external"
};
