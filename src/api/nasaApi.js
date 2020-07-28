const nasaApi = "https://images-api.nasa.gov";

export const getDataApi = () => ({
  url: nasaApi + "/search",
  method: "GET",
  // params: { q: " " },
});

export const searchWithParamsApi = (params) => ({
  url: nasaApi + "/search",
  method: "GET",
  params,
});
