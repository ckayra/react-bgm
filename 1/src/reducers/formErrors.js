import {LOGIN_FAILURE,LOGIN_REQUEST} from '../containers/login/loginActions'

export default function formErrors(state={},action={}){
  switch(action.type){
    case LOGIN_FAILURE:
      return{...state, login: action.errors}
    case LOGIN_REQUEST:
      return{...state , login: {}}
    default: return state
  }
}
