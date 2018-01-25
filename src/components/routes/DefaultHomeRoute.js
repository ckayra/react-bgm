import React from 'react';
import PropTypes from 'prop-types';
import {Route, Redirect} from 'react-router-dom'
import {connect} from 'react-redux';

const DefaultHomeRoute = ({isAuthenticated,user,component: Component, ...rest}) => {

	const page = () => {

		let link
		if (isAuthenticated){
			switch(user.tipoUtente) {
				case "M":{
					link='/agenti';
					break;
				}
				case "A":{
					link='/clienti';
					break;
				}
				case "C":{
					link='/daticontabili';
					break;
				}
				default: link='/login'
			}
		}

		return link;
	};



	return (<Route {...rest} render={() =>  <Redirect to={page()} />} />)
}

DefaultHomeRoute.propTypes={
	component: PropTypes.func.isRequired,
	isAuthenticated: PropTypes.bool.isRequired,
	user: PropTypes.shape({
		transactId: PropTypes.string.isRequired,
		user:PropTypes.string.isRequired,
		password:PropTypes.string.isRequired,
		lang:PropTypes.string.isRequired,
	})
}

function mapStateToProps(state){
	return{
		isAuthenticated: !!state.user.user,
		user:state.user
	}
}

export default connect(mapStateToProps)(DefaultHomeRoute);
