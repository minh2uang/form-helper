import { Typography } from "@mui/material";
import React from "react";

type Props = {
  error?: string;
  isDirty?: boolean;
  children?: JSX.Element;
};

const TcFieldWrapper = ({ children, error, isDirty }: Props) => {
  return (
    <>
      {children}
      {error && isDirty && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </>
  );
};

export default TcFieldWrapper;
