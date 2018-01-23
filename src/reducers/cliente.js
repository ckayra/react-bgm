import { SET_CLIENTE } from "../types";

export default function cliente(state = {}, action = {}) {
  switch (action.type) {
    case SET_CLIENTE:
      return action.cliente;
    default:
      return state;
  }
}
