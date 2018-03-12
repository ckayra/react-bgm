
// constants
export const types = {
   TABLISTINI_SET:"TABLISTINI_SET",
   TABPAGAMENTI_SET:"TABPAGAMENTI_SET",
   TABRESE_SET:"TABRESE_SET",
   TABSPEDIZIONI_SET:"TABSPEDIZIONI_SET",
   TABTIPOCLIENTI_SET:"TABTIPOCLIENTI_SET",
   TABZONE_SET:"TABZONE_SET",

}

// reducers
export const initialState = {
  tabListini:[{value:"",text:""}],
  tabPagamenti:[{value:"",text:""}],
  tabRese:[{value:"",text:""}],
  tabSpedizioni:[{value:"",text:""}],
  tabTipoclienti:[{value:"",text:""}],
  tabZone:[{value:"",text:""}],
}
//
export default (state = initialState, action) => {
  // console.log("x-state:", state)
  // console.log("x-action:", action)

   switch (action.type) {
     case types.TABLISTINI_SET:  return  { ...state, tabListini:action.response};
     case types.TABPAGAMENTI_SET:  return  { ...state, tabPagamenti:action.response};
     case types.TABRESE_SET:  return  { ...state, tabRese:action.response};
     case types.TABSPEDIZIONI_SET: return   { ...state, tabSpedizioni:action.response};
     case types.TABTIPOCLIENTI_SET: return  { ...state, tabTipoclienti:action.response};
     case types.TABZONE_SET:  return  { ...state, tabZone:action.response};
     default:
      return state
   }
}

//
// // actions
// export const actions = {
//   saveClienteRequest: (user,cliente) => ({ type: types.CLIENTE_SET, user,cliente }),
//   getClienteRequest: (user,codiceCliente) => ({ type: types.CLIENTE_GET, user,codiceCliente }),
//
// }
