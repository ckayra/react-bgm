import { LOGIN_REQUEST } from './loginConstants'

export default function loginRequest ( user ) {
  return {
    type: LOGIN_REQUEST,
    user
  }
}
