import { SEARCH, GET_DATA, SORT_DATA } from "../constants";

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

export const sortData = (value) => ({
  type: SORT_DATA.SORT_DATA,
  payload: { ...value },
});

export const sortDataSuccess = (data) => ({
  type: SORT_DATA.SORT_DATA_SUCCESS,
  data,
});

export const sortDataFail = (err) => ({
  type: SORT_DATA.SORT_DATA_FAIL,
  err,
});
