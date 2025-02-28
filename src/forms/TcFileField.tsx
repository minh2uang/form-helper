import React, { useEffect, useRef } from "react";
import { Input, TextField } from "@mui/material";
import TcFieldProps from "../types/Form/TcFieldProps";
import FieldWrapper from "./TcFieldWrapper";

const TailoredFileField = ({
  onChange,
  value,
  error,
  isDirty,
  ...props
}: TcFieldProps<Blob>) => {
  const ref = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (ref.current && value === undefined) {
      console.log({ ...ref.current });
      ref.current.value = "";
    }
  }, [value]);
  return (
    <FieldWrapper error={error} isDirty={isDirty}>
      <TextField
        {...props}
        inputRef={ref}
        type="file"
        onChange={({ target }) => {
          const files = (target as HTMLInputElement).files;
          const newFile = files && files[0];
          newFile && onChange(newFile);
        }}
      />
    </FieldWrapper>
  );
};

export default TailoredFileField;
