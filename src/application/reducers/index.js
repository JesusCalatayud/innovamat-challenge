import { combineReducers } from "redux";
import resources from "./resources";
import detail from "./detail";
import favorites from "./favorites";

const reducers = combineReducers({
  resources,
  detail,
  favorites,
});

export default reducers;
