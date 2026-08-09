'use client';
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const queryClient = new react_query_1.QueryClient();
const CustomQueryClientProvider = ({ children }) => {
    return <react_query_1.QueryClientProvider client={queryClient}>{children}</react_query_1.QueryClientProvider>;
};
exports.default = CustomQueryClientProvider;
