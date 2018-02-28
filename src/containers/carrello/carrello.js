import {types as userTypes} from '../login/user'

// constants
export const types = {
   CARRELLO_GET:"CARRELLO_GET",
   CARRELLO_SET:"CARRELLO_SET",
   CARRELLOTOTALI_SET:"CARRELLOTOTALI_SET"
}

// reducers
 // export const initialState = sessionStorage.getItem('carrelloInUso') ? JSON.parse(sessionStorage.carrelloInUso) : {}
export const initialState = {
  testata:{},
  totali:{},
  nrdocumento:"",
  items:[]
}

// export const getCartInSession= () => sessionStorage.getItem('carrelloInUso') ? JSON.parse(sessionStorage.carrelloInUso) : {}
// export const initialState={
//   tipoPrezzo:"",
//   cart: getCartInSession(),
//
// }

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CARRELLO_SET:  return action.response;
     case types.CARRELLOTOTALI_SET:  return {
        ...state,
          totali:action.response,
      };
      case userTypes.USER_SETAGENTE: return {}
      case userTypes.USER_SETCLIENTE: return {}

     default:
      return state
   }
}

// actions
export const actions = {
  getCarrello: (user,nrdocumento) => ({ type: types.CARRELLO_GET, user,nrdocumento }),

}
