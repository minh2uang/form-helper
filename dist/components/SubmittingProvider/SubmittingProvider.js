'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoading = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const context = (0, react_1.createContext)([
    false,
    () => { }
]);
const GlobalSubmittingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    return ((0, jsx_runtime_1.jsx)(context.Provider, { value: [isLoading, setIsLoading], children: children }));
};
exports.default = GlobalSubmittingProvider;
const useLoading = () => (0, react_1.useContext)(context);
exports.useLoading = useLoading;
