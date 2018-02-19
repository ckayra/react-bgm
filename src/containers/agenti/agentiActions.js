import { GETAGENTI_REQUEST,AGENTI_SET } from './agentiConstants'

export  function getAgentiRequest ( user ) {

  return {
    type: GETAGENTI_REQUEST,
    user
  }
}

export  function setAgentiRequest ( agenti ) {
//  sessionStorage.agenti=JSON.stringify(agenti);
  return {
    type: AGENTI_SET,
    agenti
  }
}
