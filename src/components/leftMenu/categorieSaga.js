import { call, put, takeLatest } from 'redux-saga/effects'
import { types as categorieTypes } from './categorie'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";

function* categorieFlow (action) {
    yield put({ type: apiTypes.API_REQUEST})
  try {
    const response = yield call(api.catalogo.getCategorie, action.user)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: categorieTypes.CATEGORIE_SET,response})
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


function* categorieSaga () {
  yield [
    takeLatest(categorieTypes.CATEGORIE_GET, categorieFlow)
  ]

}

export default categorieSaga
