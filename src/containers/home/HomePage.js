import React  from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import {actions as loginActions} from '../login/login'

const HomePage=({isAuthenticated, logout,user}) => (
	<div>
		<h1>Home Page</h1>
		{isAuthenticated ? <button onClick={()  =>logout(user)}>Logout {user.user}</button> :<Link href='login' to="/login">Login</Link>}
	</div>
);

HomePage.propTypes={
	isAuthenticated: PropTypes.bool.isRequired,
	logout: PropTypes.func.isRequired,
	user: PropTypes.shape({
		transactId: PropTypes.string.isRequired,
		user:PropTypes.string.isRequired,
		password:PropTypes.string.isRequired,
		lang:PropTypes.string.isRequired,
	}).isRequired
}

function mapStateToProps(state){

	return{
		isAuthenticated: !!state.user.user,
		user:state.user
	}
}

export default connect(mapStateToProps, {logout: loginActions.logoutRequest})(HomePage);
