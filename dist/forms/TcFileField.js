"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const material_1 = require("@mui/material");
const TcFieldWrapper_1 = __importDefault(require("./TcFieldWrapper"));
const TailoredFileField = ({ onChange, value, error, isDirty, ...props }) => {
    const ref = (0, react_1.useRef)(null);
    (0, react_1.useEffect)(() => {
        if (ref.current && value === undefined) {
            console.log({ ...ref.current });
            ref.current.value = "";
        }
    }, [value]);
    return ((0, jsx_runtime_1.jsx)(TcFieldWrapper_1.default, { error: error, isDirty: isDirty, children: (0, jsx_runtime_1.jsx)(material_1.TextField, { ...props, inputRef: ref, type: "file", onChange: ({ target }) => {
                const files = target.files;
                const newFile = files && files[0];
                newFile && onChange(newFile);
            } }) }));
};
exports.default = TailoredFileField;
