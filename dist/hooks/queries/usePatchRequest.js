"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const configs_1 = require("../../configs");
const usePatchRequest = (urlTail) => {
    const url = (0, configs_1.getUrl)(urlTail);
    const { mutateAsync } = (0, react_query_1.useMutation)({
        mutationFn: async (body) => {
            const response = await fetch(url, {
                method: "PATCH",
                headers: (0, configs_1.getHeaders)(),
                body: JSON.stringify(body),
            });
            if (!response.ok) {
                throw await response.text();
            }
        },
    });
    return mutateAsync;
};
exports.default = usePatchRequest;
