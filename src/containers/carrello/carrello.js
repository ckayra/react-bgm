// constants
export const types = {
   CARRELLO_GET:"CARRELLO_GET",
   CARRELLO_SET:"CARRELLO_SET",
}

// reducers
export const initialState = sessionStorage.getItem('carrelloInUso') ? JSON.parse(sessionStorage.carrelloInUso) : ""

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CARRELLO_SET:  return action.response;
     default:
      return state
   }
}

// actions
export const actions = {
  getCarrello: (user,nrdocumento) => ({ type: types.CARRELLO_GET, user,nrdocumento }),

}
