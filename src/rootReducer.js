import { combineReducers } from "redux";
 import apiRequest from "./apiHelper";
import agenti from "./containers/agenti/agenti"
import clienti from "./containers/clienti/clienti"
import tabelle from "./containers/tabelle/tabelle"
import categorie from "./components/leftMenu/categorie"
import carrelli from "./containers/carrelliaperti/carrelliaperti"
import carrello from "./containers/carrello/carrello"
import {types as userTypes} from './containers/login/user'
import  user from './containers/login/user'
import  cliente from './containers/clienti/cliente'


const appReducer = combineReducers({
  user,
  apiRequest,
  agenti,
  clienti,
  categorie,
  carrelli,
  carrello,
  cliente,
  tabelle
});

const rootReducer = ( state, action ) => {
  if ( action.type === userTypes.USER_SET  && !action.response.user) {
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
