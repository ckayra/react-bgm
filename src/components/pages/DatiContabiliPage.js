import React  from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types'

import api from "../../api";

class DatiContabili extends React.Component {
	state={
		saldCont:0,
		scaduto:0,
		nrInsol:0,
		valInso:0,
		FatEseAtt:0,
		FatEsePre:0,
		FatEseMe2:0,
		ValOrdini:0,
		ValFido:0,
		SupFido:0
	}

	render() {

		api.clienti.getDatiContabili(this.props.user).then(daticontabili => {
			console.log({daticontabili})
			//[{"transactId":"011345","esito":"K","descrEsito":"ESEGUITO","nomeCampo":"","saldCont":"0,00","scaduto":"0,00","nrInsol":"","valInso":"0,00","FatEseAtt":"0,00","FatEsePre":"0,00","FatEseMe2":"0,00","ValOrdini":"0,00","ValFido":"","SupFido":""}]
		})

		return (
			<div>daticontabili</div>
		);
	}
}


function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps)(DatiContabili);
