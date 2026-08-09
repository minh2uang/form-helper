"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const material_1 = require("@mui/material");
const react_1 = __importDefault(require("react"));
const TcFieldWrapper = ({ children, error, info, isDirty }) => {
    return (<react_1.default.Fragment>
      <material_1.Tooltip arrow title={info} placement="top">
        {children}
      </material_1.Tooltip>
      {error && isDirty && (<material_1.Typography color="error" variant="body2">
          {error}
        </material_1.Typography>)}
    </react_1.default.Fragment>);
};
exports.default = TcFieldWrapper;
