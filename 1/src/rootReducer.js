import { combineReducers } from "redux";
// import { reducer as form } from 'redux-form'
import user from "./components/user/userReducer";
 import apiRequest from "./reducers/apiRequestReducer";

export default combineReducers({
  user,
  apiRequest
  // form,
  // login
});
