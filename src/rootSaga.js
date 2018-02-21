import loginSaga from './containers/login/loginSaga'
import userSaga from './containers/login/userSaga'
import agentiSaga from './containers/agenti/agentiSaga'
import clientiSaga from './containers/clienti/clientiSaga'

export default function* rootSaga () {

  yield [
    loginSaga(),
    userSaga(),
    agentiSaga(),
    clientiSaga()
  ]
}
