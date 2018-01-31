import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

const MasterRoute = ({isMasterUser,isAuthenticated,component: Component, ...rest}) => (
	<Route {...rest} render={props =>  isAuthenticated ?  isMasterUser? <Component {...props} /> : <Redirect to="daticontabili" /> : <Redirect to="/login" />} />
)

MasterRoute.propTypes={
	component: PropTypes.func.isRequired,
	isMasterUser: PropTypes.bool.isRequired,
	isAuthenticated: PropTypes.bool.isRequired

}

function mapStateToProps(state){
	return{
		isMasterUser: state.user.tipoUtente==='M',
		isAuthenticated: !!state.user.user

	}
}

export default connect(mapStateToProps)(MasterRoute);
