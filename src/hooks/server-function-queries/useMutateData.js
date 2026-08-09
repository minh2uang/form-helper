"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const useMutateData = (fn) => {
    const { mutateAsync } = (0, react_query_1.useMutation)({
        mutationFn: async (body) => {
            try {
                return await fn(body);
            }
            catch (error) {
                throw error;
            }
        },
    });
    return mutateAsync;
};
exports.default = useMutateData;
