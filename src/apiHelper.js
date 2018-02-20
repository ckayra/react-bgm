// constants
export const types = {
   API_REQUEST:"API_REQUEST",
   API_SUCCESS:"API_SUCCESS",
   API_ERROR:"API_ERROR",
}

// reducers
export const initialState = {
  requesting: false,
  successful: false,
  errors: [],
}

export default (state = initialState, action) => {
   switch (action.type) {
     case types.API_REQUEST:
       return {
         requesting: true,
         successful: false,
         errors: [],
       }
       case types.API_SUCCESS:
            return {
              errors: [],
              requesting: false,
              successful: true,
            }
       case types.API_ERROR:
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
