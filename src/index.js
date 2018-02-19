import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
// import {addLocaleData} from  'react-intl';
// import en from "react-intl/locale-data/en";
// import it from "react-intl/locale-data/it"
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import createSagaMiddleware from "redux-saga";
import { composeWithDevTools } from "redux-devtools-extension";
import "semantic-ui-css/semantic.min.css";
import App from "./App";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import registerServiceWorker from "./registerServiceWorker";
import { setUser } from "./containers/user/userActions";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware, thunk))
);
sagaMiddleware.run(rootSaga);
if (sessionStorage.user) {
  const response = JSON.parse(sessionStorage.user);
  store.dispatch(setUser(response));
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
