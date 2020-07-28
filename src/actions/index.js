import { SEARCH, GET_DATA } from "../constants";

export const searchWithParams = (params) => ({
  type: SEARCH.SEARCH,
  params,
});

export const searchWithParamsSuccess = (data) => ({
  type: SEARCH.SEARCH_SUCCESS,
  data,
});

export const searchWithParamsFail = (err) => ({
  type: SEARCH.SEARCH_FAIL,
  err,
});

export const getData = () => ({
  type: GET_DATA.GET_DATA,
});

export const getDataSuccess = (data) => ({
  type: GET_DATA.GET_DATA_SUCCESS,
  data,
});

export const getDataFail = (err) => ({
  type: GET_DATA.GET_DATA_FAIL,
  err,
});
