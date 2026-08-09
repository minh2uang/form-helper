"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const TcFieldWrapper_1 = __importDefault(require("./TcFieldWrapper"));
const TcTextField = ({ onChange, error, isDirty, value, info, ...props }) => {
    return ((0, jsx_runtime_1.jsx)(TcFieldWrapper_1.default, { isDirty: isDirty, error: error, info: info, children: (0, jsx_runtime_1.jsx)(material_1.TextField, { fullWidth: true, size: "small", ...props, InputLabelProps: { shrink: true }, value: value || '', onChange: ({ target }) => onChange(target.value) }) }));
};
exports.default = TcTextField;
