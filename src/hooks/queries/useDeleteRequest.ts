import { useMutation } from "@tanstack/react-query";
import { getHeaders, getUrl } from "../../configs";

const useDeleteRequest = (urlTail: string) => {
  const url = getUrl(urlTail);
  const { mutateAsync } = useMutation({
    mutationFn: async () => {
      const response = await fetch(url, {
        method: "DELETE",
        headers: getHeaders(),
      });
      if (!response.ok) {
        throw await response.text();
      }
    },
  });
  return mutateAsync;
};

export default useDeleteRequest;
