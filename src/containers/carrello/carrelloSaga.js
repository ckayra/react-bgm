import { call, put, takeLatest } from 'redux-saga/effects'
import {  types as carrelloTypes } from './carrello'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";

function* carrelloFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {
console.log("cart action get", action)
    const response = yield call(api.carrello.getCarrello, action.user, action.nrdocumento)
    yield put({ type: apiTypes.API_SUCCESS,response})
    sessionStorage.setItem('carrello',JSON.stringify(response))
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


function* carrelloSaga () {
  yield takeLatest(carrelloTypes.CARRELLO_GET, carrelloFlow)

}

export default carrelloSaga
