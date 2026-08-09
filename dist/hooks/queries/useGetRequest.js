"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_query_1 = require("@tanstack/react-query");
const configs_1 = require("../../configs");
// abstract away error handling
// skip retrieving "user" everywhere
const useGetRequest = (urlTail, fallbackValue) => {
    const url = (0, configs_1.getUrl)(urlTail);
    const { data, refetch, status } = (0, react_query_1.useQuery)({
        queryKey: [url],
        queryFn: async () => {
            try {
                const response = await fetch(url, {
                    method: "GET",
                    headers: (0, configs_1.getHeaders)(),
                });
                if (!response.ok) {
                    throw await response.text();
                }
                return response.json();
            }
            catch (err) {
                if (fallbackValue !== undefined) {
                    return fallbackValue;
                }
                throw err;
            }
        },
    });
    return { data: data, status, refetch }; // Guaranteed not undefined by react-query
};
exports.default = useGetRequest;
