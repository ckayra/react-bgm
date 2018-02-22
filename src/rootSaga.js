import loginSaga from './containers/login/loginSaga'
import userSaga from './containers/login/userSaga'
import agentiSaga from './containers/agenti/agentiSaga'
import clientiSaga from './containers/clienti/clientiSaga'
import categorieSaga from './components/leftMenu/categorieSaga'
import carrelliSaga from './containers/carrelliaperti/carrelliSaga'


export default function* rootSaga () {

  yield [
    loginSaga(),
    userSaga(),
    agentiSaga(),
    clientiSaga(),
    categorieSaga(),
    carrelliSaga()
  ]
}
