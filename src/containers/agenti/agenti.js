// constants
export const types = {
   AGENTI_GET:"AGENTI_GET",
   AGENTI_SET:"AGENTI_SET",
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
  getAgenti: (user) => ({ type: types.AGENTI_GET, user }),
}
