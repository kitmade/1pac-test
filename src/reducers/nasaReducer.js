import { SEARCH } from "../constants";

const nasaInitialState = {
  data: [],
  err: "",
};

const nasaReducer = (state = nasaInitialState, action) => {
  switch (action.type) {
    case SEARCH.SEARCH_SUCCESS:
      return { ...state, data: action.data, err: "" };
    case SEARCH.SEARCH_FAIL:
      return { ...state, err: action.err };
    default:
      return state;
  }
};

export default nasaReducer;
