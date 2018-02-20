// constants
export const types = {
   LOGIN_REQUEST:"LOGIN_REQUEST",
   LOGIN_SUCCESS:"LOGIN_SUCCESS",
   LOGIN_ERROR:"LOGIN_ERROR",
   LOGOUT_REQUEST:"LOGOUT_REQUEST",
   LOGOUT_SUCCESS:"LOGOUT_SUCCESS",
   LANGUAGE_SET:"LANGUAGE_SET",
   KEEPALIVE_REQUEST:"KEEPALIVE_REQUEST",
}

// reducers
export const initialState = sessionStorage.getItem('agenti') ? JSON.parse(sessionStorage.agenti) : []

export default (state = initialState, action) => {
   switch (action.type) {
     case types.AGENTI_SET:  return action.response;
     default:
      return state
   }
}

// actions
export const actions = {
  loginRequest: (user) => ({ type: types.LOGIN_REQUEST, user }),
  logoutRequest: (user) => ({ type: types.LOGOUT_REQUEST, user }),
  setLanguage: (user) => ({ type: types.LANGUAGE_SET, user }),
  keepalive :(user) =>({ type: types.KEEPALIVE_REQUEST, user }),
}
