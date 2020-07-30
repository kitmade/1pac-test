import { combineReducers } from "redux";
import nasaReducer from "./nasaReducer";

const rootReducer = combineReducers({ nasaReducer });

export default rootReducer;
