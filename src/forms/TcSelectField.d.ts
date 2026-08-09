import React from 'react';
import TcFieldProps from '../types/Form/TcFieldProps';
export interface Select {
    _id: string;
    name: string;
}
interface Props<Item extends Select> extends TcFieldProps<Item> {
    options: Item[];
}
declare const TcSelectField: <Item extends Select>({ onChange, label, value, options, error, isDirty }: Props<Item>) => React.JSX.Element;
export default TcSelectField;
//# sourceMappingURL=TcSelectField.d.ts.map