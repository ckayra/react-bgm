import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
// import {addLocaleData} from  'react-intl';
// import en from "react-intl/locale-data/en";
// import it from "react-intl/locale-data/it"
import{createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import 'semantic-ui-css/semantic.min.css';
import App from './App';
import rootReducer from './rootReducer'
import {userLoggedIn} from './actions/auth';
import registerServiceWorker from './registerServiceWorker';
// import '../public/build/css/main.css';

// addLocaleData(en);
// addLocaleData(it);

const store=createStore(rootReducer,composeWithDevTools(applyMiddleware(thunk)));

if (sessionStorage.user){
	const user=JSON.parse(sessionStorage.user);
	store.dispatch(userLoggedIn(user));
}


ReactDOM.render(
	<BrowserRouter>
		<Provider store={store}>
			<Route component={App} />
		</Provider>
	</BrowserRouter>
	, document.getElementById('root'));
registerServiceWorker();
