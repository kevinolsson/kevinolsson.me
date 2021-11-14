import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { useSelector } from "react-redux";
import { ISettings } from "../../data/interfaces";

export const ResumeIntroduction = (): JSX.Element => {
  const { settings } = useSelector((state: { settings: ISettings }) => state);
  const { linkedIn } = settings.socialMedia || {};
  return (
    <div>
      <Typography variant="body1">
        I am Front-end developer who is passionate about UX Design.{" "}
        <strong>I love building user interfaces.</strong> Everything here is
        more or less what exists on my{" "}
        <Link
          href={linkedIn}
          target="_blank"
          underline="always"
          color="primary"
        >
          LinkedIn
        </Link>{" "}
        profile. Born in Manila 🇵🇭, now sitting in Stockholm 🇸🇪
      </Typography>
    </div>
  );
};
