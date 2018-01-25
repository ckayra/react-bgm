import React  from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'
import api from "../../api";
import { selectAgente } from "../../actions/auth";

class AgentiPage extends React.Component {
	state={
		agenti:undefined,
		loading:true,
		pageSize:10
	}


	componentDidMount() {
		api.agenti.getAgenti(this.props.user).then(agenti => {

			this.setState({ agenti ,loading:false, pageSize: agenti.length})
		})

	}



	setAgente = (codiceAgente,desAgente) => {
		this.props.selectAgente({codiceAgente,desAgente})
		this.props.history.push("/clienti")
	}

	divStyle = {
	 maxWidth:'700px',

 };


	columns = [{
	 Header: 'Cod. Agente',
	 accessor: 'codiceAgente',
	  maxWidth: 100,
		Cell: row => (
								<div
									style={{ textAlign:'center'
									}}
								>{row.value}</div>
						)

 }, {
	 Header: 'Ragione Sociale',
	 accessor: 'desAgente',

 }]



	render() {


		return (
				<ReactTable style={this.divStyle} className='shadow1'
		     data={this.state.agenti}
		     columns={this.columns}
				  loading={this.state.loading}
					showPagination= {false}
					defaultPageSize={this.state.pageSize}
					pageSize={this.state.pageSize}
					noDataText="Nessun record trovato"
				 getTdProps={(state, rowInfo) => ({
							onClick: () =>{
								this.setAgente(rowInfo.original.codiceAgente,rowInfo.original.desAgente)
							}

						})}
		   />

		);

	}
}


AgentiPage.propTypes = {
  user: PropTypes.shape({
 	 transactId: PropTypes.string.isRequired,
 	 user:PropTypes.string.isRequired,
 	 password:PropTypes.string.isRequired,
 	 lang:PropTypes.string.isRequired,
 }).isRequired,
 selectAgente: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{selectAgente})(AgentiPage);
