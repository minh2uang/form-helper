import { Box, Tooltip, Typography } from "@mui/material";
import React from "react";
import { JSX } from "react";

type Props = {
  error?: string;
  info?: string;
  isDirty?: boolean;
  children: JSX.Element;
};

const TcFieldWrapper = ({ children, error, info, isDirty }: Props) => {
  return (
    <React.Fragment>
      <Tooltip arrow title={info} placement="top">
        {children}
      </Tooltip>
      {error && isDirty && (
        <Typography color="error" variant="body2">
          {error}
        </Typography>
      )}
    </React.Fragment>
  );
};
export type TcFieldWrapper<T> = T & Props;
export default TcFieldWrapper;
