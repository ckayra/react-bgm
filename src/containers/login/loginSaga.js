import { call, put, takeLatest } from 'redux-saga/effects'
import {  LOGIN_REQUEST,LOGOUT_REQUEST} from './loginConstants'
import {  API_REQUEST,API_ERROR,API_SUCCESS} from '../../reducers/apiRequestConstants'
import {USER_SET,USER_UNSET} from '../user/userConstants'

import api from "../../api";


function* logoutFlow () {
      yield put({ type: USER_UNSET})
}

function* loginFlow (action) {
    yield put({ type: API_REQUEST})
  try {
    const {user } = action
    if (user.user===undefined )  {
      yield put({ type: API_ERROR,errors:{user: 'insert user'} })
      yield put({ type: USER_UNSET})

      return
    }
    if (user.password===undefined ){
        yield put({ type: API_ERROR,errors:{password: 'insert password'} })
        yield put({ type: USER_UNSET})

      return
    }
    const response = yield call(api.user.login, user.user,user.password)
    yield put({ type: API_SUCCESS,response})
    sessionStorage.setItem('user',JSON.stringify(response))
    yield put({ type: USER_SET,response})

  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: API_ERROR,errors})
      yield put({ type: USER_UNSET})

    } catch (e) {
      const errors=error
      yield put({ type: API_ERROR,errors})
      yield put({ type: USER_UNSET})

    }
  }
}


function* loginSaga () {
  // yield takeLatest(LOGIN_REQUEST, loginFlow)


    yield [
     takeLatest(LOGIN_REQUEST, loginFlow),
       takeLatest(LOGOUT_REQUEST, logoutFlow)
    ]
}



export default loginSaga
