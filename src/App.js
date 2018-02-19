import React from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
// import {IntlProvider} from 'react-intl';
 // import {addLocaleData,IntlProvider} from 'react-intl';
 // import en from 'react-intl/locale-data/en';
 // import it from 'react-intl/locale-data/it';
import LoginPage from './containers/login/LoginPage'
import ErrorBoundary from './components/utils/ErrorBoundary';
import Keepalive from './components/utils/Keepalive';
import UserRoute from './routes/UserRoute'
import MasterPage from './containers/masterpage/MasterPage'
// import messages from './strings/strings'
// import localeData from '../src/strings/strings.json';
//
 // addLocaleData([...en, ...it]);
// const language = (navigator.languages && navigator.languages[0]) ||
//                      navigator.language ||
//                      navigator.userLanguage;
// const languageWithoutRegionCode = language.toLowerCase().split(/[_-]+/)[0];
// const messages = localeData[languageWithoutRegionCode] || localeData[language] || localeData.en;

const App= ({location,lang}) =>

// const localMessages=messages[lang];


 (	// <IntlProvider key={lang} locale={lang} messages={localMessages} >
				<ErrorBoundary>
				<Keepalive/>
					{/* }
				<DefaultHomeRoute location={location} path='/login'  component={HomePage}/> */}
					<UserRoute location={location} path='/'  component={MasterPage}/>

					<Route location={location} lang={lang} path='/login' exact component={LoginPage}/>
				</ErrorBoundary>
				// </IntlProvider >
      )

const getLang = lang =>{
		switch (lang){
			case "01":
				return "it";
			case "02":
				return "en"
			default:
			return "it"
		}
	};

App.defaultProps={
	lang:'01',
}

App.propTypes={
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired,
	lang: PropTypes.string,
}

function mapStateToProps(state){
	return{
		lang:  getLang(state.user.lang)
	}
}

export default connect(mapStateToProps)(App);
