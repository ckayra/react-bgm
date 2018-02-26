import { call, put, takeLatest , select} from 'redux-saga/effects'
import {  types as carrelloTypes } from './carrello'
import {  actions as userActions } from '../login/user'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";
import {getAgente,getUser,getNrCarrello} from '../../index'



function* carrelloFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.carrelli.getCarrello, action.user, action.nrdocumento)
    yield put({ type: apiTypes.API_SUCCESS,response})
    // sessionStorage.setItem('carrello',JSON.stringify(response))

    yield put({ type: carrelloTypes.CARRELLO_SET,response})
    const agentecorrente=getAgente()
    console.log("response carrelloflow", agentecorrente)

    if (response.testata.codAgente!==agentecorrente){
      const user=getUser()
      userActions.setAgente(user,response.testata.codAgente,response.testata.desAgente)
    }

  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}






function* carrelloTotaliFlow (action) {
  // get totali carrello
  yield put({ type: apiTypes.API_REQUEST})
  try {
     const nrcarrello = yield select(getNrCarrello());
     const user = yield select(getUser());
     console.log('numcarrello: ' , nrcarrello)
     const totcar={ nrcarrello, fIncasso:''}
     const request={user,totcar}

  //  const response = yield call(api.carrelli.getTotaliCarrello, user,{numCarrello: nrcarrello, fIncasso:''})
  const response = yield call(api.carrelli.getTotaliCarrello,{request}  )

    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: carrelloTypes.CARRELLOTOTALI_SET,response})
  } catch (error) {
    const errors=error.response.data.errors.global
    yield put({ type: apiTypes.API_ERROR,errors})
  }
}


function* carrelloSaga () {
  yield takeLatest(carrelloTypes.CARRELLO_GET, carrelloFlow)
  yield takeLatest(carrelloTypes.CARRELLO_SET, carrelloTotaliFlow)

}

export default carrelloSaga
