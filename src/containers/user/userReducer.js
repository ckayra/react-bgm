import { USER_SET,USER_UNSET} from "./userConstants";

export default function reducer(state = {}, action ) {
  switch (action.type) {
    case USER_SET:{
      
      return action.response;
    }
    case USER_UNSET:
      sessionStorage.clear()
      // localStorage.removeItem('user')
      return{}
    default:
      return state;
  }
}
