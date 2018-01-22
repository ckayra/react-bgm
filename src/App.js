import React from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import {IntlProvider} from 'react-intl';
import LoginPage from './components/pages/LoginPage'

import ErrorBoundary from './components/utils/ErrorBoundary';
import Keepalive from './components/utils/Keepalive';
import UserRoute from './components/routes/UserRoute'
import MasterPage from './components/pages/MasterPage'

const App= ({location}) =>

<IntlProvider locale='it' messages={{
				'user':'Utente'
			}} >
			<ErrorBoundary>
			<Keepalive/>
				{/* }
			<DefaultHomeRoute location={location} path='/login'  component={HomePage}/> */}
				<UserRoute location={location} path='/'  component={MasterPage}/>
					<Route location={location} path='/login' exact component={LoginPage}/>

			</ErrorBoundary>
			</IntlProvider >
App.propTypes={
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}

export default App;
