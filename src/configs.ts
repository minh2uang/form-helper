const baseUrl = "/api";
const getUrl = (tail: string) => `${baseUrl}${tail}`;
const getHeaders = () => ({
  accept: "application/json",
});

export { getUrl, getHeaders };
