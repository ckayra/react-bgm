import userSaga from './containers/login/userSaga'
import agentiSaga from './containers/agenti/agentiSaga'
import clientiSaga from './containers/clienti/clientiSaga'
import categorieSaga from './components/leftMenu/categorieSaga'
import carrelliSaga from './containers/carrelliaperti/carrelliSaga'
import carrelloSaga from './containers/carrello/carrelloSaga'


export default function* rootSaga () {

  yield [
    userSaga(),
    agentiSaga(),
    clientiSaga(),
    categorieSaga(),
    carrelliSaga(),
    carrelloSaga()

  ]
}
