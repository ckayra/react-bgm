import {types as userTypes} from './containers/login/user'
import {types as agentiTypes} from './containers/agenti/agenti'

const debug=true

export  default (store) => next => action => {
  if(debug) console.log('dispatching', action)

  const result = next(action)
  // if(debug) console.log('result', result)

  switch (action.type) {
    case userTypes.USER_UNSET: // logout
      sessionStorage.clear();
      break;
    case userTypes.USER_SET: // login
      sessionStorage.setItem("user",JSON.stringify(action.response))
      break;
    case agentiTypes.AGENTI_SET: // elenco agenti
      sessionStorage.setItem('agenti',JSON.stringify(action.response))
      break;
    case userTypes.USER_SETAGENTE:  // select agente
      sessionStorage.setItem('user',JSON.stringify(store.getState().user))
      break;
    case agentiTypes.CLIENTI_SET: // elenco clienti
      sessionStorage.setItem('clienti',JSON.stringify(action.response))
      break;
    case userTypes.USER_SETCLIENTE: // select cliente
      sessionStorage.setItem('user',JSON.stringify(store.getState().user))
        break;
    default:

  }

  if(debug) console.log('next state', store.getState())
  return result
}
