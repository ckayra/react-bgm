

// constants
export const types = {
   USER_SET:"USER_SET",
   USER_UNSET:"USER_UNSET",
   USER_SETAGENTE:"USER_SETAGENTE",
   USER_SETCLIENTE:"USER_SETCLIENTE",
   AGENTE_SELECT:"AGENTE_SELECT"
}

// reducers
export const initialState = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.user) : {}
export default (state = initialState, action) => {
   switch (action.type) {
     case types.USER_SET:  return action.response;
     case types.USER_UNSET:  return {};
     case types.USER_SETAGENTE:   return {
        ...state,
          codiceAgente:action.codiceAgente,
          desAgente:action.desAgente,
          codiceCliente:"",
          desCliente:"",
      };
      case types.USER_SETCLIENTE:   return {
         ...state,
           codiceCliente:action.codiceCliente,
           desCliente:action.desCliente,
       };
     default:
      return state
   }
}

// actions
export const actions = {
  setUser: (user) => ({ type: types.USER_SET, user }),
  unsetUser: (user) => ({ type: types.USER_UNSET, user }),
  setAgente: (user,codiceAgente,desAgente) =>
     ({ type: types.AGENTE_SELECT, user,codiceAgente,desAgente })
   ,
  setCliente: (user,codiceCliente,desCliente) =>
     ({ type: types.USER_SETCLIENTE, user,codiceCliente,desCliente })

}
