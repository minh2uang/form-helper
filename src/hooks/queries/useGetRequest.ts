import { useQuery } from "@tanstack/react-query";
import { getHeaders, getUrl } from "../../configs";

// abstract away error handling
// skip retrieving "user" everywhere

const useGetRequest = <DataType>(urlTail: string, fallbackValue?: DataType) => {
  const url = getUrl(urlTail);
  const { data, refetch, status } = useQuery({
    queryKey: [url],
    queryFn: async (): Promise<DataType> => {
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: getHeaders(),
        });
        if (!response.ok) {
          throw await response.text();
        }
        return response.json() as DataType;
      } catch (err) {
        if (fallbackValue !== undefined) {
          return fallbackValue;
        }
        throw err;
      }
    },
  });
  return { data: data as DataType, status, refetch }; // Guaranteed not undefined by react-query
};

export default useGetRequest;
