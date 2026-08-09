"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const material_1 = require("@mui/material");
const react_1 = require("react");
const AsyncableButton = ({ onClick, ...props }) => {
    const [isLoading, setIsLoading] = (0, react_1.useState)(false);
    const overRiddenOnClick = async (event) => {
        setIsLoading(true);
        try {
            const clickResult = onClick(event);
            clickResult instanceof Promise && (await clickResult);
        }
        catch (error) {
            console.log(error);
        }
        finally {
            setIsLoading(false);
        }
    };
    return ((0, jsx_runtime_1.jsx)(material_1.Button, { onClick: overRiddenOnClick, loading: isLoading, ...props, sx: { textTransform: 'none', ...props.sx } }));
};
exports.default = AsyncableButton;
