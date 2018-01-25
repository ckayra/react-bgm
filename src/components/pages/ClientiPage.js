import React  from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table'
import 'react-table/react-table.css'

import api from "../../api";
import { selectCliente } from "../../actions/auth";

class ClientiPage extends React.Component {
	state={
		clienti:undefined,
		loading:true,
		pageSize:50

	}


	componentDidMount() {
		api.clienti.getClienti(this.props.user).then(clienti => {
			this.setState({ clienti ,loading:false })
			if (clienti!==undefined && clienti.length!==undefined) this.setState( {pageSize: clienti.length})
		})

	}



	setCliente = data => {
		this.props.selectCliente(data)
		this.props.history.push("/daticontabili")
	}

	columns = [{
	 Header: 'Cod. Cliente',
	 accessor: 'codiceCliente' // String-based value accessors!
 }, {
	 Header: 'Ragione Sociale',
	 accessor: 'desCliente',
 }]


	render() {


		return (
			<div>
				<ReactTable
		     data={this.state.clienti}
		     columns={this.columns}
				  loading={this.state.loading}
					showPagination= {false}
					defaultPageSize={this.pageSize}
				 getTdProps={(state, rowInfo, column, instance) => ({
							onClick: e() =>{
								this.setCliente({codiceCliente:rowInfo.original.codiceCliente,desCliente:rowInfo.original.desCliente})

							}
						})}
		   />

			</div>
		);

	}
}
ClientiPage.propTypes={
	user: PropTypes.shape({
		transactId: PropTypes.string.isRequired,
		user:PropTypes.string.isRequired,
		password:PropTypes.string.isRequired,
		lang:PropTypes.string.isRequired,
	}).isRequired,
	selectCliente:PropTypes.func.isRequired
}

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{selectCliente})(ClientiPage);
