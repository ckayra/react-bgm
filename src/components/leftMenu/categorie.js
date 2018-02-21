// constants
export const types = {
   CATEGORIE_GET:"CATEGORIE_GET",
   CATEGORIE_SET:"CATEGORIE_SET",
}

// reducers
export const initialState = sessionStorage.getItem('categorie') ? JSON.parse(sessionStorage.categorie) : []

export default (state = initialState, action) => {
   switch (action.type) {
     case types.CATEGORIE_SET:  return action.response;
     default:
      return state
   }
}

// actions
export const actions = {
  getCategorie: (user) => ({ type: types.CATEGORIE_GET, user }),
}
