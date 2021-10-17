import React from "react";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { ChipArray } from "../ChipArray/ChipArray";

export const ResumeOther = () => (
  <Box marginBottom={16}>
    <Typography gutterBottom variant="h4">
      Skills and Interests
    </Typography>
    <Box marginBottom={8}>
      <Typography paragraph component="div" variant="body1">
        <Box display="block" fontWeight="fontWeightBold">
          Technical:
        </Box>
      </Typography>
      <ChipArray
        label={[
          ["React", <FavoriteBorderIcon />],
          "Redux",
          ["TypeScript", <FavoriteBorderIcon />],
          "JavaScript (ES6)",
          "Webpack",
          ["Storybook.js", <FavoriteBorderIcon />],
          "MaterialUI",
          "HTML",
          "Jest",
          "Enzyme",
          "i18n",
          ["CSS", <FavoriteBorderIcon />],
          ["Sass", <FavoriteBorderIcon />],
          "JSS",
          "Design Systems",
          "Next.js",
          "Git",
          "Netlify CMS",
          "SQL",
          "Agile Methodology",
          "JIRA",
          "PHP",
          "WordPress",
          "Advanced Custom Fields"
        ]}
      />
    </Box>
    <Box marginBottom={8}>
      <Typography paragraph component="div" variant="body1">
        <Box display="block" fontWeight="fontWeightBold">
          Design:
        </Box>
      </Typography>
      <ChipArray
        label={[
          "User Interface (UI)",
          ["User Experience (UX)", <FavoriteBorderIcon />],
          ["Sketch", <FavoriteBorderIcon />],
          "Design Systems",
          "Abstract",
          "Proto.io",
          "Marvel",
          "inVision",
          "Zeplin",
          ["Figma", <FavoriteBorderIcon />],
          "UX Research",
          ["Typography", <FavoriteBorderIcon />]
        ]}
      />
    </Box>
    <Box marginBottom={8}>
      <Typography paragraph component="div" variant="body1">
        <Box display="block" fontWeight="fontWeightBold">
          Language:
        </Box>
        (Spoken natively)
      </Typography>
      <ChipArray label={["English", "Swedish", "Tagalog"]} />
    </Box>
    <Box marginBottom={8}>
      <Typography paragraph component="div" variant="body1">
        <Box display="block" fontWeight="fontWeightBold">
          Interests:
        </Box>
      </Typography>
      <ChipArray
        label={[
          "Programming",
          "Designing",
          "Building things",
          ["Eating", <FavoriteBorderIcon />],
          "Cooking",
          "Baking",
          "Travelling",
          ["Meeting new people", <FavoriteBorderIcon />],
          "Playing video games",
          "F1 Motosport",
          "Esports",
          "Climbing"
        ]}
      />
    </Box>
  </Box>
);
