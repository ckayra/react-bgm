import { USER_SET, USER_UNSET } from './userConstants'

export function setUser (response) {
  sessionStorage.user=JSON.stringify(response);
  return {
    type: USER_SET,
    response,
  }
}

export function unsetUser () {
  sessionStorage.removeItem("user")
  return {
    type: USER_UNSET,
  }
}
