// constants
export const types = {
   CLIENTE_SAVE:"CLIENTE_SAVE",
   CLIENTE_SAVESUCCESS:"CLIENTE_SAVESUCCESS",
   CLIENTE_GET:"CLIENTE_GET",
   CLIENTE_SET:"CLIENTE_SET",
   CHECK_PI:"CHECK_PI",
   MAIL_SEND:"MAIL_SEND"

}

// reducers
export const initialState = {
  ragSociale1:"",
  codSped:"3",
  codResa:"4",
  codLisV:"01",
  codDivisione1:'01',
  forzaPivaI:"",
  forzaFiscI:""
}
//
export default (state = initialState, action) => {
   switch (action.type) {
     case types.CLIENTE_SET:{
       if ( action.response.codCliente==="") return initialState
       return action.response}
     case types.CLIENTE_SAVESUCCESS: return{   ...state,
         codCliente:action.response}

     default:
      return state
   }
}
//
// // actions
export const actions = {
  saveClienteRequest: (user,cliente) => ({ type: types.CLIENTE_SAVE, user,cliente }),
  getClienteRequest: (user,codiceCliente) => ({ type: types.CLIENTE_GET, user,codiceCliente }),
  checkPI: (user,codNazione , forzaPivaI , pivaCEE ,  codFiscale ,  forzaFiscI ) => ({ type: types.CHECK_PI, user,codNazione , forzaPivaI , pivaCEE ,  codFiscale ,  forzaFiscI  }),
  sendMail: (user,clienteNew, clienteOld) => ({ type: types.MAIL_SEND, user,clienteNew,clienteOld }),

}
