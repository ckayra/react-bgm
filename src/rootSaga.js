import loginSaga from './containers/login/loginSaga'
import agentiSaga from './containers/agenti/agentiSaga'
import clientiSaga from './containers/clienti/clientiSaga'

export default function* rootSaga () {

  yield [
    loginSaga(),
    agentiSaga(),
    clientiSaga()
  ]
}
