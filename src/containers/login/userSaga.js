import { call, put, takeLatest } from 'redux-saga/effects'
import { types as loginTypes} from './login'
import { types as userTypes} from './user'
import { types as clientiTypes} from '../clienti/clienti'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";


function* logoutFlow () {
      yield put({ type: userTypes.USER_SET,response:{}})
}

function* loginFlow (action) {
  try {
    const {user } = action
    if (user.user===undefined )  {
      return
    }
    if (user.password===undefined ){
      return
    }
    yield put({ type: apiTypes.API_REQUEST})
    const response = yield call(api.user.login, user.user,user.password)
    yield put({ type: apiTypes.API_SUCCESS,response})
    // sessionStorage.setItem('user',JSON.stringify(response))
    yield put({ type: userTypes.USER_SET,response})

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

function* keepaliveFlow (action) {
  try {
    const {user } = action
    yield put({ type: apiTypes.API_REQUEST})
    const response = yield call(api.user.keepalive, user.user,user.password)
    yield put({ type: apiTypes.API_SUCCESS,response})
  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
      yield put({ type: userTypes.USER_SET,response:{}})

    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}

function* setAgenteFlow () {
    yield put({ type: clientiTypes.CLIENTI_SET,response:[]})
}

function* userSaga () {
    yield [
     takeLatest(loginTypes.LOGIN_REQUEST, loginFlow),
     takeLatest(loginTypes.LOGOUT_REQUEST, logoutFlow),
// takeLatest(loginTypes.KEEPALIVE_REQUEST, keepaliveFlow),
     takeLatest(userTypes.USER_SETAGENTE, setAgenteFlow)
    ]
}



export default userSaga
