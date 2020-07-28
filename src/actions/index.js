import { SEARCH } from "../constants";

export const searchWithParams = (params) => ({
  type: SEARCH.SEARCH,
  params,
});

export const searchWithParamsSuccess = (data) => ({
  type: SEARCH.SEARCH_SUCCESS,
  data,
});

export const searchWithParamsFail = (mess) => ({
  type: SEARCH.SEARCH_FAIL,
  mess,
});
