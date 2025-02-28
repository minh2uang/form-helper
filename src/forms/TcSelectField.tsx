import React from 'react'
import { Autocomplete, TextField } from '@mui/material'
import FieldWrapper from './TcFieldWrapper'
import TcFieldProps from '../types/Form/TcFieldProps'

export interface Select {
  _id: string
  name: string
}
interface Props<Item extends Select> extends TcFieldProps<Item> {
  options: Item[]
}

const TcSelectField = <Item extends Select>({
  onChange,
  label,
  value,
  options,
  error,
  isDirty
}: Props<Item>) => {
  return (
    <FieldWrapper error={error} isDirty={isDirty}>
      <Autocomplete
        size="small"
        options={options}
        getOptionLabel={(select) => select.name}
        onChange={(_, newValue) => newValue && onChange(newValue)}
        value={value || null}
        renderInput={(params) => <TextField {...params} label={label} />}
      />
    </FieldWrapper>
  )
}

export default TcSelectField
