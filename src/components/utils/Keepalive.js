import React  from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import {actions as loginActions}  from "../../containers/login/login";

class Keepalive extends React.Component {

	componentDidMount(){
		this.timerID=setInterval(
		() => this.tick(this.props.user),1000*60*5
		);
	}

	componentWillUnmount(){
		clearInterval(this.timerID)
	}

	tick = (user) =>{
		if (user && user.transactId)  this.props.onKeepAlive(user)
}

	render() {
		return <div/>;
	}
}

Keepalive.propTypes = {
 onKeepAlive: PropTypes.func.isRequired,
 user: PropTypes.shape({
	 transactId: PropTypes.string,
	 user:PropTypes.string,
	 password:PropTypes.string,
	 lang:PropTypes.string,
 }).isRequired
};


const mapDispatchToProps = (dispatch) => ({
    onKeepAlive: bindActionCreators(loginActions.keepalive, dispatch),
})

function mapStateToProps(state){
  return{
    user: state.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps )(Keepalive);
