'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useLoading = exports.LoadableChildren = void 0;
const material_1 = require("@mui/material");
const react_1 = require("react");
const navigation_1 = require("next/navigation");
const context = (0, react_1.createContext)([
    false,
    () => { }
]);
const LoadingProvider = ({ children }) => {
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
const LoadableChildren = ({ children }) => {
    const [isLoading] = (0, exports.useLoading)();
    return isLoading ? (<material_1.Box sx={{
            justifyContent: 'center',
            alignItems: 'center',
            height: 1,
            width: 1,
            display: 'flex'
        }}>
      <material_1.Typography>Loading....</material_1.Typography>
    </material_1.Box>) : (children);
};
exports.LoadableChildren = LoadableChildren;
exports.default = LoadingProvider;
const useLoading = () => (0, react_1.useContext)(context);
exports.useLoading = useLoading;
