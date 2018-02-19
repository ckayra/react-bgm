import { combineReducers } from "redux";
 import apiRequest from "./reducers/apiRequestReducer";
import user from "./containers/user/userReducer";
import agenti from "./containers/agenti/agentiReducer"

export default combineReducers({
  user,
  apiRequest,
  agenti
});
