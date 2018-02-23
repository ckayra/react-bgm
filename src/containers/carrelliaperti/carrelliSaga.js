import { call, put, takeLatest } from 'redux-saga/effects'
import { types as carrelliTypes } from './carrelliaperti'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";

function* carrelliFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.carrelli.getCarrelli, action.user)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: carrelliTypes.CARRELLI_SET,response})
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


function* togglesospesoFlow (action) {

    yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.carrelli.toggleCarrelloSospeso,action.state)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: carrelliTypes.CARRELLO_SETSOSPESO,response})
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

function* carrelliSaga () {
  yield [
    takeLatest(carrelliTypes.CARRELLI_GET, carrelliFlow),
    takeLatest(carrelliTypes.CARRELLO_TOGGLESOSPESO, togglesospesoFlow)
  ]

}

export default carrelliSaga
