import React from "react";
import { useTheme } from "@mui/material/styles";

export const StyleInit = (): JSX.Element => {
  const theme = useTheme();

  // eslint-disable-next-line no-console
  console.log({ theme });
  return <React.Fragment />;
};
