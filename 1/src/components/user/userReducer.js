import { USER_SET,USER_UNSET} from "./userConstants";

export default function reducer(state = {}, action ) {
  switch (action.type) {
    case USER_SET:{
      console.log(action.response)
      sessionStorage.user=JSON.stringify(action.response);
      return action.response;
    }
    case USER_UNSET:
      sessionStorage.removeItem("user")
      return{}
    default:
      return state;
  }
}
