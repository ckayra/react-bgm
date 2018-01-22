import { SET_AGENTE } from "../types";

export default function agente(state = {}, action = {}) {
  switch (action.type) {
    case SET_AGENTE:
      return action.agente;
    default:
      return state;
  }
}
