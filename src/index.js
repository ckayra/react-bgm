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
// import "semantic-ui-css/semantic.min.css";
import App from "./App";
import rootReducer from "./rootReducer";
import rootSaga from "./rootSaga";
import registerServiceWorker from "./registerServiceWorker";
import saveState from "./sessionStorage"
// const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')) : {}
// const persistedState = loadState();

 // const localStorageMiddleware = store => next => action => {
 // if (action.type === 'REGISTER' || action.type === 'LOGIN') {
 //   if (!action.error) {
 //     window.localStorage.setItem('jwt', action.payload.user.token);
 //     agent.setToken(action.payload.user.token);
 //   }
 // } else if (action.type === 'LOGOUT') {
 //   window.localStorage.setItem('jwt', '');
 //   agent.setToken(null);
 // }
 // next(action);
 // };

 //
 // const loggerFactory = (name) =>
 //      (middlewareAPI) =>
 //          (next) =>
 //              (action) => {
 //                 const ret = next(action),
 //                     newstate = middlewareAPI.getState();
 //                 output(name+": called with "+JSON.stringify(action)+", state now "+newstate);
 //                 return ret;
 //             }
 //



 //
 // const localStorageMiddleware = () => store => next => action => {
 //   // Get the state before and after the action was performed
 //   // const previousToken = store.getState().token;
 //   console.log(action)
 //    next(action);
 //   // const nextToken = store.getState().token;
 //   //
 //   //
 //   // if (action.type === 'USER_SET' ){
 //   //   console.log("middleware storing user")
 //   //   localStorage.setItem('userxxx', nextToken)
 //   // }
 //   //
 //   // // Respond to changes
 //   // if (nextToken !== previousToken) localStorage.setItem('token', nextToken);
 // };


 // const localStorageMiddleware= () =>
 //    store => next => action => {
 //     if (action.type === 'USER_SET1') {
 //      console.log('ciao')
 //     }
 //     next(action)
 //   }

// const persistedState = sessionStorage.getItem('reduxState') ? JSON.parse(sessionStorage.getItem('reduxState')) : {}
// const persistedState = loadState();

 // const localStorageMiddleware = store => next => action => {
 // if (action.type === 'REGISTER' || action.type === 'LOGIN') {
 //   if (!action.error) {
 //     window.localStorage.setItem('jwt', action.payload.user.token);
 //     agent.setToken(action.payload.user.token);
 //   }
 // } else if (action.type === 'LOGOUT') {
 //   window.localStorage.setItem('jwt', '');
 //   agent.setToken(null);
 // }
 // next(action);
 // };

 //
 // const loggerFactory = (name) =>
 //      (middlewareAPI) =>
 //          (next) =>
 //              (action) => {
 //                 const ret = next(action),
 //                     newstate = middlewareAPI.getState();
 //                 output(name+": called with "+JSON.stringify(action)+", state now "+newstate);
 //                 return ret;
 //             }
 //



 //
 // const localStorageMiddleware = () => store => next => action => {
 //   // Get the state before and after the action was performed
 //   // const previousToken = store.getState().token;
 //   console.log(action)
 //    next(action);
 //   // const nextToken = store.getState().token;
 //   //
 //   //
 //   // if (action.type === 'USER_SET' ){
 //   //   console.log("middleware storing user")
 //   //   localStorage.setItem('userxxx', nextToken)
 //   // }
 //   //
 //   // // Respond to changes
 //   // if (nextToken !== previousToken) localStorage.setItem('token', nextToken);
 // };

 // const logger = store => next => action => {
 //   console.log('dispatching', action)
 //   console.log('type', action.type)
 //   if (action.type==='USER_SET'){
 //     console.log('save user to storage', action.response)
 //     sessionStorage.setItem("user",JSON.stringify(action.response))
 //   }
 //     let result = next(action)
 //     console.log('next state', store.getState())
 //   return result
 // }

const sagaMiddleware = createSagaMiddleware();


const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(saveState,sagaMiddleware, thunk))
);

// store.subscribe(()=>{
//   saveState(
//     {
//         user:store.getState().user
//     })
//   // sessionStorage.setItem('reduxState', JSON.stringify(store.getState()))
// })


sagaMiddleware.run(rootSaga);
// if (sessionStorage.user) {
//   const response = JSON.parse(sessionStorage.user);
//   store.dispatch(userActions.setUser(response));
// }
// if (sessionStorage.agenti) {
//   const response = JSON.parse(sessionStorage.agenti);
//   store.dispatch(AgentiActions.setAgente(response));
//
// }

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <Route component={App} />
    </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
