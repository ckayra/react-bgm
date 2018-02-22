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
          sospeso:action.sospeso,
      };
     default:
      return state
   }
}

// actions
export const actions = {
  getCarrelli: (user) => ({ type: types.CARRELLI_GET, user }),
  toggleSospeso: (cart) => ({ type: types.CARRELLO_TOGGLESOSPESO, cart }),

}
