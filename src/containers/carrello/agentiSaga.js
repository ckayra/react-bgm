import { call, put, takeLatest } from 'redux-saga/effects'
import { types as agentiTypes } from './agenti'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";

function* agentiFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.agenti.getAgenti, action.user)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: agentiTypes.AGENTI_SET,response})
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


function* agentiSaga () {
  yield [
    takeLatest(agentiTypes.AGENTI_GET, agentiFlow)
  ]

}

export default agentiSaga
