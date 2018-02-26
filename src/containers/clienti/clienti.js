import {types as userTypes} from '../login/user'

// constants
export const types = {
   CLIENTI_GET:"CLIENTI_GET",
   CLIENTI_SET:"CLIENTI_SET",
}

// reducers
export const initialState = sessionStorage.getItem('clienti') ? JSON.parse(sessionStorage.clienti) : []

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CLIENTI_SET:  return action.response;
     case userTypes.USER_SETAGENTE: return []
     default:
      return state
   }
}

// actions
export const actions = {
  getClienti: (user) => ({ type: types.CLIENTI_GET, user }),

}
