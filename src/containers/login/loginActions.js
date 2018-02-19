import { LOGIN_REQUEST,LOGOUT_REQUEST,LANGUAGE_SET } from './loginConstants'

export default function loginRequest ( user ) {
  return {
    type: LOGIN_REQUEST,
    user
  }
}

export  function logoutRequest ( user ) {
  return {
    type: LOGOUT_REQUEST,
    user
  }
}

export  function setLanguage ( user ) {
  return {
    type: LANGUAGE_SET,
    user
  }
}
