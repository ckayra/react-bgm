import { call, put, takeLatest } from 'redux-saga/effects'
import {  types as clientiTypes } from './clienti'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";

function* clientiFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {

    const response = yield call(api.clienti.getClienti, action.user)
    yield put({ type: apiTypes.API_SUCCESS,response})
    sessionStorage.setItem('clienti',JSON.stringify(response))
    yield put({ type: clientiTypes.CLIENTI_SET,response})
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


function* clientiSaga () {
  yield takeLatest(clientiTypes.CLIENTI_GET, clientiFlow)

}

export default clientiSaga
