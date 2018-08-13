import {combineReducers} from "redux";
import ProfileReducers from "./ProfileReducers";

export default combineReducers({
  profile: ProfileReducers
});
