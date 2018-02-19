import { call, put, takeLatest } from 'redux-saga/effects'
import {  GETAGENTI_REQUEST,AGENTI_SET} from './agentiConstants'
import {  API_REQUEST,API_ERROR,API_SUCCESS} from '../../reducers/apiRequestConstants'

import api from "./agentiApi";

function* agentiFlow (action) {
    yield put({ type: API_REQUEST})
  try {
    const response = yield call(api.agenti.get, action.user)
    console.log('response', response)
    yield put({ type: API_SUCCESS,response})
    yield put({ type: AGENTI_SET,response})
  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: API_ERROR,errors})
    }
  }
}


function* agentiSaga () {
  yield takeLatest(GETAGENTI_REQUEST, agentiFlow)
}

export default agentiSaga
