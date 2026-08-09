"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const TcFieldWrapper_1 = __importDefault(require("./TcFieldWrapper"));
const TcSelectField = ({ onChange, label, value, options, error, isDirty }) => {
    return ((0, jsx_runtime_1.jsx)(TcFieldWrapper_1.default, { error: error, isDirty: isDirty, children: (0, jsx_runtime_1.jsx)(material_1.Autocomplete, { size: "small", options: options, getOptionLabel: (select) => select.name, onChange: (_, newValue) => newValue && onChange(newValue), value: value || null, renderInput: (params) => (0, jsx_runtime_1.jsx)(material_1.TextField, { ...params, label: label }) }) }));
};
exports.default = TcSelectField;
