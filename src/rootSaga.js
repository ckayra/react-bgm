import { all } from 'redux-saga/effects'
import loginSaga from './containers/login/loginSaga'
import agentiSaga from './containers/agenti/agentiSaga'

export default function* rootSaga () {
  yield all([ loginSaga(), agentiSaga()])
}
