// constants
export const types = {
   USER_SET:"USER_SET",
   USER_SETAGENTE:"USER_SETAGENTE",
   USER_SETCLIENTE:"USER_SETCLIENTE",
   AGENTE_SELECT:"AGENTE_SELECT",
   CARRELLO_SET:"CARRELLO_SET"
}

// reducers
export const initialState = sessionStorage.getItem('user') ? JSON.parse(sessionStorage.user) : {}
export default (state = initialState, action) => {
   switch (action.type) {
     case types.USER_SET:  return action.response;
     case types.USER_SETAGENTE: {
       console.log('ACTION',action)
       if (state.codiceAgente!==action.codiceAgente){
       return {
        ...state,
          codiceAgente:action.codiceAgente,
          desAgente:action.desAgente,
          codiceCliente:"",
          desCliente:"",
      };}
      break;
    }
      case types.USER_SETCLIENTE:
      if (state.codiceCliente!==action.codiceCliente){

        return {
         ...state,
           codiceCliente:action.codiceCliente,
           desCliente:action.desCliente,
       };}
       break;
       // case types.CARRELLO_SET: return {
       //      ...state,
       //       codiceAgente:action.response.testata.codAgente,
       //       desAgente:action.response.testata.desAgente,
       //       codiceCliente:action.response.testata.codCliente,
       //       desCliente:action.response.testata.desCliente,
       //   };

     default:
      return state
   }
}

// actions
export const actions = {
  setUser: (user) => ({ type: types.USER_SET, user }),
  setAgente: (user,codiceAgente,desAgente) => ({type: types.USER_SETAGENTE,user,codiceAgente,desAgente}),
  setCliente: (user,codiceCliente,desCliente) => ({ type: types.USER_SETCLIENTE, user,codiceCliente,desCliente })
}
