import { useMutation } from "@tanstack/react-query";

const useMutateData = <ArgType extends {}, ResponseType = undefined>(
  fn: (args: ArgType) => Promise<ResponseType>,
) => {
  const { mutateAsync } = useMutation({
    mutationFn: async (body: ArgType) => {
      try {
        return await fn(body);
      } catch (error) {
        throw error;
      }
    },
  });
  return mutateAsync;
};

export default useMutateData;
