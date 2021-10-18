import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ProjectPreview } from "./ProjectPreview";

export default {
  title: "Components/ProjectPreview",
  component: ProjectPreview
} as ComponentMeta<typeof ProjectPreview>;

const Template: ComponentStory<typeof ProjectPreview> = args => (
  <ProjectPreview {...args} />
);

export const Default = Template.bind({});
Default.args = {
  projects: [
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
    },
    {
      title: "Puerto - Tapas Vino",
      thumbnail: "/images/uploads/thumbnail-puerto.jpg",
      url: "https://www.behance.net/gallery/45046867/Puerto-Tapas-Vino",
      type: "external"
    }
  ]
};
