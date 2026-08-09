'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlert = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const AlertContext = (0, react_1.createContext)(() => {
    throw 'Not implemented';
});
const AlertProvider = ({ children }) => {
    const [contextValue, setContextValue] = (0, react_1.useState)([]);
    const pushAlert = (alert) => {
        const alertId = Date.now();
        setContextValue([...contextValue, { ...alert, id: alertId }]);
        setTimeout(() => setContextValue((cur) => cur.filter(({ id }) => id != alertId)), 2000);
    };
    return ((0, jsx_runtime_1.jsxs)(AlertContext.Provider, { value: pushAlert, children: [contextValue.map((alert, index) => ((0, jsx_runtime_1.jsx)(material_1.Snackbar, { open: true, anchorOrigin: { vertical: 'top', horizontal: 'center' }, children: (0, jsx_runtime_1.jsx)(material_1.Alert, { severity: alert.alertType, sx: { width: '100%' }, children: alert.content }) }, index))), (0, jsx_runtime_1.jsx)(jsx_runtime_1.Fragment, { children: children })] }));
};
const useAlert = () => (0, react_1.useContext)(AlertContext);
exports.useAlert = useAlert;
exports.default = AlertProvider;
