import { SEARCH, GET_DATA, SORT_DATA } from "../constants";

const nasaInitialState = {
  data: [],
  err: "",
};

const nasaReducer = (state = nasaInitialState, action) => {
  switch (action.type) {
    case SEARCH.SEARCH:
      return { data: [], err: "" };
    case SEARCH.SEARCH_SUCCESS:
      return { ...state, data: action.data, err: "" };
    case SEARCH.SEARCH_FAIL:
      return { ...state, err: action.err };
    case GET_DATA.GET_DATA_SUCCESS:
      return { ...state, data: action.data, err: "" };
    case GET_DATA.GET_DATA_FAIL:
      return { ...state, err: action.err };
    case SORT_DATA.SORT_DATA:
      return { ...state, data: [] };
    case SORT_DATA.SORT_DATA_SUCCESS:
      return { ...state, data: action.data, err: "" };
    case SORT_DATA.SORT_DATA_FAIL:
      return { ...state, err: action.err };
    default:
      return state;
  }
};

export default nasaReducer;
