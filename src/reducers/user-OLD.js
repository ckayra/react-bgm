import { USER_LOGGED_IN,USER_LOGGED_OUT ,SET_CODAGENTE,SET_CODCLIENTE,SET_DESAGENTE,SET_DESCLIENTE,SET_LANG} from "../types";

export default function user(state = {}, action = {}) {
  switch (action.type) {
    case USER_LOGGED_IN:
      return action.user;
    case USER_LOGGED_OUT:
      return {};
    case SET_CODAGENTE:
      return{...state,codiceAgente:action.codiceAgente}
    case SET_DESAGENTE:
      return{...state,desAgente:action.desAgente}
    case SET_CODCLIENTE:
      return{...state,codiceCliente:action.codiceCliente}
    case SET_DESCLIENTE:
      return{...state,desCliente:action.desCliente}
      case SET_LANG:
        return{...state,lang:action.lang}
    default:
      return state;
  }
}
