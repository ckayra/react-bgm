import { USER_SET, USER_UNSET } from './userConstants'

export function setUser (response) {

  return {
    type: USER_SET,
    response,
  }
}

export function unsetUser () {
  return {
    type: USER_UNSET,
  }
}
