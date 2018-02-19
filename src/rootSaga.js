import loginSaga from './containers/login/loginSaga'
import agentiSaga from './containers/agenti/agentiSaga'

export default function* rootSaga () {

  yield [
    loginSaga(),
    agentiSaga()
  ]
}
