/// <reference types="react" />
export default interface TcFieldProps<Value, Required extends Boolean = false> {
    label: string;
    onChange: (newValue: Value) => void;
    value: Required extends true ? Value : Value | undefined;
    error?: string;
    isDirty?: boolean;
    children?: JSX.Element;
}
//# sourceMappingURL=TcFieldProps.d.ts.map