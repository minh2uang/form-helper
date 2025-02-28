import { useMutation } from "@tanstack/react-query";
import { getUrl, getHeaders } from "../../configs";

const usePostFileRequest = <ResponseType = undefined>(urlTail: string) => {
  const url = getUrl(urlTail);
  const { mutateAsync } = useMutation({
    mutationFn: async (body: Blob) => {
      try {
        const response = await fetch(url, {
          method: "POST",
          headers: {
            ...getHeaders,
            "Content-type": "application/octet-stream",
          },
          body,
        });
        if (!response.ok) {
          throw await response.text();
        }
        return (await response.json()) as ResponseType;
      } catch (error) {
        throw error;
      }
    },
  });
  return mutateAsync;
};

export default usePostFileRequest;
