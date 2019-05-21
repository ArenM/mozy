import userReducer from "./userReducer";
import apiState from "./apiState";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  user: userReducer,
  errors: apiState
});

export default rootReducer;
