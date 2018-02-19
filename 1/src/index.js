import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import{createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk';
import "semantic-ui-css/semantic.min.css";
import App from './App';
import rootReducer from './rootReducer'
import registerServiceWorker from './registerServiceWorker';
import rootSaga from './rootSaga'
import {setUser} from './components/user/userActions';

const sagaMiddleware = createSagaMiddleware()

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(sagaMiddleware,thunk)));
sagaMiddleware.run(rootSaga)
if (sessionStorage.user){
	const response=JSON.parse(sessionStorage.user);
	store.dispatch(setUser(response));
}


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
			</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
