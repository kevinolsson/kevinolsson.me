import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ThumbnailGrid } from "./ThumbnailGrid";

export default {
  title: "Components/ThumbnailGrid",
  component: ThumbnailGrid
} as ComponentMeta<typeof ThumbnailGrid>;

const Template: ComponentStory<typeof ThumbnailGrid> = args => (
  <ThumbnailGrid {...args} />
);

export const Default = Template.bind({});
Default.args = {
  thumbnails: [
    {
      title: "Citihub - Branding & Web Design",
      thumbnail: "images/uploads/thumbnail-citihub.jpg",
      url:
        "https://www.behance.net/gallery/44986527/Citihub-Branding-Web-Design",
      type: "external"
    },
    {
      title: "Prime Cut - Meat shop",
      thumbnail: "images/uploads/thumbnail-primecut.jpg",
      url: "https://www.behance.net/gallery/44985357/Prime-Cut-Meat-shop",
      type: "external"
    },
    {
      title: "Esalin - Filipino based translation",
      thumbnail: "images/uploads/thumbnail-esalin.jpg",
      url:
        "https://www.behance.net/gallery/45094481/Esalin-Filipino-based-translation",
      type: "external"
    }
  ]
};
