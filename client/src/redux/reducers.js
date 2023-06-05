import { combineReducers } from "redux";
import authReducer from "./slices/authenticationSlice";

const rootReducer = combineReducers({
  auth: authReducer,
});

export default rootReducer;
