import React  from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import api from "../../api";
import { selectAgente } from "../../actions/auth";

class AgentiPage extends React.Component {
	state={
		agenti:undefined,
		loading:true,
		pageSize:50
	}


	componentDidMount() {
		api.agenti.getAgenti(this.props.user).then(agenti => {
			this.setState({ agenti ,loading:false, pageSize: agenti.legth})
		})

	}


	 columns = [{
    Header: 'Cod. Agente',
    accessor: 'codiceAgente' // String-based value accessors!
  }, {
    Header: 'Ragione Sociale',
    accessor: 'desAgente',
  }]

	setAgente = (codiceAgente,desAgente) => {
		this.props.selectAgente({codiceAgente,desAgente})
		this.props.history.push("/clienti")
	}

	render() {


		return (
				<ReactTable
		     data={this.state.agenti}
		     columns={this.columns}
				  loading={this.state.loading}
					showPagination= {false}
					defaultPageSize={this.pageSize}

				 getTdProps={(state, rowInfo, column) => ({
							onClick: () =>{
								this.setAgente(rowInfo.original.codiceAgente,rowInfo.original.desAgente)

							}
						})}
		   />

		);

	}
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{selectAgente})(AgentiPage);
