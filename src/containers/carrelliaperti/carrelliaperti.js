// constants
export const types = {
   CARRELLI_GET:"CARRELLI_GET",
   CARRELLI_SET:"CARRELLI_SET",
   CARRELLO_SETSOSPESO:"CARRELLO_SETSOSPESO",
   CARRELLO_TOGGLESOSPESO:"CARRELLO_TOGGLESOSPESO"

}

// reducers
export const initialState = []

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CARRELLI_SET:  return action.response;
     case types.CARRELLO_SETSOSPESO:   return {
        ...state,
          sospeso:action.cart.sospeso,
      };
     default:
      return state
   }
}

// actions
export const actions = {
  getCarrelli: (user) => ({ type: types.CARRELLI_GET, user }),
<<<<<<< HEAD
  toggleSospeso: (user,nrdocumento) => ({ type: types.CARRELLO_TOGGLESOSPESO,payload: {user,nrdocumento}}),
=======
  toggleSospeso: (state) => ({ type: types.CARRELLO_TOGGLESOSPESO, state }),
>>>>>>> c63c963c778bfa18e4c0b7babb9d31fe7a601cd2

}
