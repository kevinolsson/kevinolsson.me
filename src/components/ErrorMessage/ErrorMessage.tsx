import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Meta } from "../Meta/Meta";
import { Link } from "react-router-dom";
import { Button } from "../Button/Button";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

interface IErrorMessage {
  code: number;
}

export const ErrorMessage = ({ code }: IErrorMessage): JSX.Element => {
  return (
    <React.Fragment>
      <Meta title={`Oops! - error ${code || "🤷‍♂️"}`} />
      <Button component={Link} to="/" startIcon={<ArrowBackIcon />}>
        Take me home
      </Button>
      <Typography gutterBottom variant="h1">
        {`Oops! - error ${code || "🤷‍♂️"}`}
      </Typography>
      <Box maxWidth={640}>
        <Typography variant="body1" paragraph>
          Hi! You have arrived at a page which I wasn't really planning on
          showing anyone. Hehe. If you feel passionate that something should be
          here, do reach out!
        </Typography>
      </Box>
    </React.Fragment>
  );
};
