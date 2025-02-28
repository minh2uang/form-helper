import { useMutation } from "@tanstack/react-query";
import { getUrl, getHeaders } from "../../configs";

const usePatchRequest = <BodyType>(urlTail: string) => {
  const url = getUrl(urlTail);
  const { mutateAsync } = useMutation({
    mutationFn: async (body: BodyType) => {
      const response = await fetch(url, {
        method: "PATCH",
        headers: getHeaders(),
        body: JSON.stringify(body),
      });
      if (!response.ok) {
        throw await response.text();
      }
    },
  });
  return mutateAsync;
};

export default usePatchRequest;
