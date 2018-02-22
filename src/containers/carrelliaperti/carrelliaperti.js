// constants
export const types = {
   CARRELLI_GET:"CARRELLI_GET",
   CARRELLI_SET:"CARRELLI_SET",
}

// reducers
export const initialState = []

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CARRELLI_SET:  return action.response;
     default:
      return state
   }
}

// actions
export const actions = {
  getCarrelli: (user) => ({ type: types.CARRELLI_GET, user }),
}
