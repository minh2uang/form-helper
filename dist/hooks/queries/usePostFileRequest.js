"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const configs_1 = require("../../configs");
const usePostFileRequest = (urlTail) => {
    const url = (0, configs_1.getUrl)(urlTail);
    const { mutateAsync } = (0, react_query_1.useMutation)({
        mutationFn: async (body) => {
            try {
                const response = await fetch(url, {
                    method: "POST",
                    headers: {
                        ...configs_1.getHeaders,
                        "Content-type": "application/octet-stream",
                    },
                    body,
                });
                if (!response.ok) {
                    throw await response.text();
                }
                return (await response.json());
            }
            catch (error) {
                throw error;
            }
        },
    });
    return mutateAsync;
};
exports.default = usePostFileRequest;
