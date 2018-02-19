import { API_REQUEST,API_SUCCESS, API_ERROR } from './apiRequestConstants'

const initialState = {
  requesting: false,
  successful: false,
  errors: [],
}

const reducer = function apiRequestReducer (state = initialState, action) {
  switch (action.type) {
    case API_REQUEST:
      return {
        requesting: true,
        successful: false,
        errors: [],
      }
      case API_SUCCESS:
           return {
             errors: [],
             requesting: false,
             successful: true,
           }
      case API_ERROR:
     return {
       errors: state.errors.concat([{
         body: action.errors.toString(),
         time: new Date(),
       }]),
       requesting: false,
       successful: false,
     }
    default:
      return state
  }
}

export default reducer
