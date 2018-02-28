import { call, put, takeLatest , select} from 'redux-saga/effects'
import {  types as carrelloTypes } from './carrello'
import { types as apiTypes} from '../../apiHelper'
import {  types as userTypes } from '../login/user'
import api from "../../api";



function* carrelloFlow (action) {
  yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.carrelli.getCarrelloCompleto, action.user, action.nrdocumento)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: userTypes.USER_SETAGENTE,codiceAgente:response.testata.codAgente,desAgente:response.testata.desAgente})
   yield put({ type: userTypes.USER_SETCLIENTE,codiceCliente:response.testata.codCliente,desCliente:response.testata.desCliente})

    yield put({ type: carrelloTypes.CARRELLO_SET,response})

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


// function* carrelloTotaliFlow (action) {
//   yield put({ type: apiTypes.API_REQUEST})
//   try {
//     const state = yield select();
//     const nrdoc =state.carrello.nrdocumento
//     const user = state.user;
//     const request={user,totcar:{nrcarrello:nrdoc, fIncasso:''}}
//     const response = yield call(api.carrelli.getTotaliCarrello,{request}  )
//     yield put({ type: apiTypes.API_SUCCESS,response})
//     yield put({ type: carrelloTypes.CARRELLOTOTALI_SET,response})
//   } catch (error) {
//     const errors=error.response.data.errors.global
//     yield put({ type: apiTypes.API_ERROR,errors})
//   }
// }


function* carrelloSaga () {
  yield takeLatest(carrelloTypes.CARRELLO_GET, carrelloFlow)
  // yield takeLatest(carrelloTypes.CARRELLO_SET, carrelloTotaliFlow)

}

export default carrelloSaga
