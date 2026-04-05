import { TextField, TextFieldProps } from '@mui/material'
import FieldWrapper, { TcFieldWrapper } from './TcFieldWrapper'
import TcFieldProps from './TcFieldProps'

export type TcTextFieldProps = TcFieldProps<string> &
  Omit<TextFieldProps, 'onChange' | 'error'> & {
    type?: string
    rows?: number
    info?: string
    // children?: JSX.Element
  }

const TcTextField: React.FC<TcTextFieldProps> = ({
  onChange,
  error,
  isDirty,
  value,
  info,
  ...props
}) => {
  return (
    <FieldWrapper isDirty={isDirty} error={error} info={info}>
      <TextField
        fullWidth
        size="small"
        {...props}
        InputLabelProps={{ shrink: true }}
        value={value || ''}
        onChange={({ target }) => onChange(target.value)}
      />
    </FieldWrapper>
  )
}

export default TcTextField
