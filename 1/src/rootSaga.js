import loginSaga from './containers/login/loginSaga'

export default function* rootSaga () {
  // yield takeLatest(LOGIN_REQUEST, doLoginRequest);
  yield [ loginSaga(), ]
}
