import React from 'react';
import {Route} from 'react-router-dom'
import PropTypes from 'prop-types'
import ErrorBoundary from './components/notifications/ErrorBoundary';
import LoginPage from './containers/login/LoginPage'
import MasterPage from './containers/masterpage/MasterPage'
import UserRoute from './routes/UserRoute'

const App = ({location}) => (
  <ErrorBoundary>
    <Route location={location} path='/login' exact component={LoginPage}/>
    <UserRoute location={location} path='/'  component={MasterPage}/>
  </ErrorBoundary>
);

App.propTypes={
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired,
}

export default App;
