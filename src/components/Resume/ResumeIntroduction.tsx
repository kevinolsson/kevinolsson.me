import React from "react";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import { useSelector } from "react-redux";

export const ResumeIntroduction = () => {
  const { settings } = useSelector((state: { settings: any }) => state);
  const { linkedIn } = settings.socialMedia;
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
