"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const TcFieldWrapper = ({ children, error, info, isDirty }) => {
    return ((0, jsx_runtime_1.jsxs)(react_1.default.Fragment, { children: [(0, jsx_runtime_1.jsx)(material_1.Tooltip, { arrow: true, title: info, placement: "top", children: children }), error && isDirty && ((0, jsx_runtime_1.jsx)(material_1.Typography, { color: "error", variant: "body2", children: error }))] }));
};
exports.default = TcFieldWrapper;
