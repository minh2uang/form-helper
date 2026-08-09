"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useQuery = void 0;
const react_query_1 = require("@tanstack/react-query");
Object.defineProperty(exports, "useQuery", { enumerable: true, get: function () { return react_query_1.useQuery; } });
const useGetData = ({ fn, fallbackValue, params, queryKey = [] }) => {
    const { data, refetch, status } = (0, react_query_1.useSuspenseQuery)({
        queryKey: queryKey,
        queryFn: async () => {
            try {
                const result = await fn(params);
                return result;
            }
            catch (err) {
                if (!!fallbackValue) {
                    return fallbackValue;
                }
                throw err;
            }
        }
    });
    // const [data, setData] = useState<DataType>()
    // const [isLoading, setIsLoading] = useLoading()
    // console.log(isLoading)
    // const doAction = async () => {
    //   setIsLoading(true)
    //   const result = await fn(params)
    //   setData(result)
    //   setIsLoading(false)
    // }
    // useEffect(() => {
    //   void doAction()
    // }, [])
    // useEffect(() => {
    //   setIsLoading(true)
    // }, [data])
    return { data: data, status, refetch }; // Guaranteed not undefined by react-query
};
exports.default = useGetData;
