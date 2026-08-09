'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDialog = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const context = (0, react_1.createContext)([
    false,
    () => { }
]);
const DialogProvider = ({ children }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const pathname = (0, navigation_1.usePathname)();
    (0, react_1.useEffect)(() => {
        setIsLoading(false);
    }, [pathname]);
    console.log(isLoading);
    return ((0, jsx_runtime_1.jsx)(context.Provider, { value: [isLoading, setIsLoading], children: children }));
};
exports.default = DialogProvider;
const useDialog = () => (0, react_1.useContext)(context);
exports.useDialog = useDialog;
