import React  from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import {keepalive}  from "../../actions/auth";


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
			 this.props.keepalive(user).then(() => {

		})
}


	render() {
		return <div/>;
	}
}

Keepalive.propTypes = {
 keepalive: PropTypes.func.isRequired,
 user: PropTypes.shape({
	 transactId: PropTypes.string.isRequired,
	 user:PropTypes.string.isRequired,
	 password:PropTypes.string.isRequired,
	 lang:PropTypes.string.isRequired,
 }).isRequired
};


function mapStateToProps(state){
  return{
    user: state.user,

  }
}

export default connect(mapStateToProps, { keepalive })(Keepalive);
