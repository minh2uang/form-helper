'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useDialog = void 0;
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
    return (<context.Provider value={[isLoading, setIsLoading]}>
      {children}
    </context.Provider>);
};
exports.default = DialogProvider;
const useDialog = () => (0, react_1.useContext)(context);
exports.useDialog = useDialog;
