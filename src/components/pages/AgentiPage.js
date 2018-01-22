import React  from 'react';
import axios from 'axios'
import { connect } from "react-redux";

class AgentiPage extends React.Component {
	state={
		agenti:{}
	}


	componentDidMount() {
			console.log('credentials: ',this.props.user)
	  axios
	    .post(`http://provebgm2.elelco.it/api/agenti`,this.props.user)
	    .then(res => this.setState({ agenti: res.data }))
	    .catch(err => console.log(err))
	}


	render() {
		return (
			<div>Elenco Agenti</div>
		);
	}
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(AgentiPage);
