import React  from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table'
import api from "../../api";
import 'react-table/react-table.css'
import { selectAgente } from "../../actions/auth";

class AgentiPage extends React.Component {
	state={
		agenti:undefined
	}


	componentDidMount() {
		api.agenti.getAgenti(this.props.user).then(agenti => this.setState({ agenti: agenti }))

	}


	 columns = [{
    Header: 'Cod. Agente',
    accessor: 'codiceAgente' // String-based value accessors!
  }, {
    Header: 'Ragione Sociale',
    accessor: 'desAgente',
  }]

	setAgente = data => {
		this.props.selectAgente(data)
		this.props.history.push("/clienti")
	}

	render() {

if (this.state.agenti){
		return (
			<div>
				<ReactTable
		     data={this.state.agenti}
		     columns={this.columns}
				 getTdProps={(state, rowInfo, column, instance) => {
						return {
							onClick: e =>{
								console.log("Cell - onClick", rowInfo.original.codiceAgente)
								this.setAgente({codiceAgente:rowInfo.original.codiceAgente,desAgente:rowInfo.original.desAgente})

							}
						};
				}}
		   />

			</div>
		);
	}else return(<h1>Agenti</h1>)
	}
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{selectAgente})(AgentiPage);
