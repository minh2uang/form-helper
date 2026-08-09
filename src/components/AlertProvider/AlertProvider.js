'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useAlert = void 0;
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
    return (<AlertContext.Provider value={pushAlert}>
      {contextValue.map((alert, index) => (<material_1.Snackbar key={index} open={true} anchorOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <material_1.Alert severity={alert.alertType} sx={{ width: '100%' }}>
            {alert.content}
          </material_1.Alert>
        </material_1.Snackbar>))}
      <>{children}</>
    </AlertContext.Provider>);
};
const useAlert = () => (0, react_1.useContext)(AlertContext);
exports.useAlert = useAlert;
exports.default = AlertProvider;
