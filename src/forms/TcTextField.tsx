import React, { useCallback } from 'react'
import { TextField, Typography } from '@mui/material'
import FieldWrapper from './TcFieldWrapper'
import TcFieldProps from '../types/Form/TcFieldProps'

interface Props extends TcFieldProps<string> {
  type?: string
}

const TcTextField = ({ onChange, error, isDirty, value, ...props }: Props) => {
  return (
    <FieldWrapper isDirty={isDirty} error={error}>
      <TextField
        {...props}
        value={value || ''}
        onChange={({ target }) => onChange(target.value)}
      />
    </FieldWrapper>
  )
}

export default TcTextField
