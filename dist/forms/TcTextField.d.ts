/// <reference types="react" />
import { TextFieldProps } from '@mui/material';
import TcFieldProps from './TcFieldProps';
export type TcTextFieldProps = TcFieldProps<string> & Omit<TextFieldProps, 'onChange' | 'error'> & {
    type?: string;
    rows?: number;
    info?: string;
};
declare const TcTextField: React.FC<TcTextFieldProps>;
export default TcTextField;
//# sourceMappingURL=TcTextField.d.ts.map