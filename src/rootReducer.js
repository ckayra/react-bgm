import { combineReducers } from "redux";
 import apiRequest from "./apiHelper";
import user from "./containers/login/user";
import agenti from "./containers/agenti/agenti"
import clienti from "./containers/clienti/clienti"
import {types as userTypes} from './containers/login/user'

const appReducer = combineReducers({
  user,
  apiRequest,
  agenti,
  clienti
});

const rootReducer = ( state, action ) => {
  if ( action.type === userTypes.USER_UNSET ) {
    sessionStorage.clear();
    state = undefined;
  }
  return appReducer(state, action)
}

export default rootReducer
//
// export default combineReducers({
//   user,
//   apiRequest,
//   agenti
// });
