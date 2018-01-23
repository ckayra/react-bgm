import { combineReducers } from "redux";

import user from "./reducers/user";
import agente from "./reducers/agente";
import cliente from "./reducers/cliente";

export default combineReducers({
  user
});
