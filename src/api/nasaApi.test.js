import * as nasaApi from "./nasaApi";

describe("NasaApi", () => {
  describe("searchWithParams", () => {
    it("should return an obj with params", () => {
      const params = {
        nasa_id: "test_nasa_id",
        q: "test_q",
        title: "test_title",
      };
      const withParams = nasaApi.searchWithParamsApi(params);
      expect(withParams).objectContaining(params);
    });
  });
});
