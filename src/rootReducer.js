import { combineReducers } from "redux";

import user from "./reducers/user";
import agente from "./reducers/agente";

export default combineReducers({
  user,
  agente
});
