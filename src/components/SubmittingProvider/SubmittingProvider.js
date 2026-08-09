'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoading = void 0;
const react_1 = require("react");
const context = (0, react_1.createContext)([
    false,
    () => { }
]);
const GlobalSubmittingProvider = ({ children }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    return (<context.Provider value={[isLoading, setIsLoading]}>
      {children}
    </context.Provider>);
};
exports.default = GlobalSubmittingProvider;
const useLoading = () => (0, react_1.useContext)(context);
exports.useLoading = useLoading;
