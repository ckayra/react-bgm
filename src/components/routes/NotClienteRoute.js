import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

const NotClienteRoute = ({isNotClienteUser,isAuthenticated,component: Component, ...rest}) => (
	<Route {...rest} render={props => isAuthenticated ?   <Component {...props} /> :  <Redirect to="/login" />} />
)

NotClienteRoute.propTypes={
	component: PropTypes.func.isRequired,
	isNotClienteUser: PropTypes.bool.isRequired,
	isAuthenticated: PropTypes.bool.isRequired

}

function mapStateToProps(state){
	return{
		isNotClienteUser: state.user.tipoUtente==='M' || state.user.tipoUtente==='A',
		isAuthenticated: !!state.user.user

	}
}

export default connect(mapStateToProps)(NotClienteRoute);

