import { call, put, takeEvery } from 'redux-saga/effects'
import {  GETAGENTI_REQUEST,AGENTI_SET} from './agentiConstants'
import {  API_REQUEST,API_ERROR,API_SUCCESS} from '../../reducers/apiRequestConstants'

import api from "./agentiApi";

function* agentiFlow (action) {
   debugger;
    yield put({ type: API_REQUEST})
  try {
    const {user } = action
    if (user.user===undefined )  {
      yield put({ type: API_ERROR,errors:{user: 'insert user'} })
      return
    }
    if (user.password===undefined ){
        yield put({ type: API_ERROR,errors:{password: 'insert password'} })
      return
    }
    const response = yield call(api.agenti.get, user)
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

  yield takeEvery(GETAGENTI_REQUEST, agentiFlow)
}

export default agentiSaga
