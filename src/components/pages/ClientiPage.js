import React  from 'react';
import { connect } from "react-redux";
import ReactTable from 'react-table'
import 'react-table/react-table.css'
import PropTypes from 'prop-types'
import $ from 'jquery';
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
			if(clienti){
				this.setState({ clienti ,loading:false, pageSize: clienti.length})
			}else{
				this.setState({ clienti ,loading:false})
			}
		})

	}

	handleSearch = (event) => {
		var filter = $('.search').val().toUpperCase();
		 if (filter && filter!='') {
			 $('.ReactTable').find(".rt-td:not(:contains(" + filter + "))").parent().parent().slideUp();

		$('.ReactTable').find(".rt-td:contains(" + filter + ")").parent().parent().slideDown();
} else {
	console.log('nofilter')

      $('.ReactTable').find(".rt-tr-group").slideDown();
    }
	  if(event.key === 'Enter'){
	    console.log('enter press here! ')
	  }
	}

	setCliente = (codiceCliente,ragSociale12) => {
		this.props.selectCliente({codiceCliente,ragSociale12})
		this.props.history.push("/daticontabili")
	}

	divStyle = {
	 maxWidth:'1400px',
 };


	 columns = [{
    Header: 'Cod. Cliente',
    accessor: 'codiceCliente',
		maxWidth: 100
  },
	{
    Header: 'Ragione Sociale',
    accessor: 'ragSociale12',
		filterAll:true
		// defaultFilterMethod: (filter, row, column) => {
		// 		const id = filter.pivotId || filter.id
		// 		return row["codiceCliente"] !== undefined ? String(row["codiceCliente"]).startsWith(filter.value) || String(row["ragSociale12"]).startsWith(filter.value) : true
		// 	}
  },
	{
		Header: 'CAP',
		accessor: 'cap',
		maxWidth: 80
	},
	{
		Header: 'Località',
		accessor: 'localita',
	},
	{
		Header: 'P. Iva CEE',
		accessor: 'pivaCEE',
		maxWidth: 120
	},
	{
		Header: '',
		accessor: 'fScaduto',
		maxWidth: 40,
		Cell: row => (
								<div
									style={{ textAlign:'center'
									}}
								>
										{row.value==='S' ? <i className="material-icons icona-scaduto">report_problem</i> : '' }
								</div>
						)
	},
	{
		Header: 'scaduto',
		accessor: 'scaduto',
		maxWidth: 100,
		Cell: row => (
								<div
									style={{ textAlign:'right'
									}}
								>
								{row.value!=='0,00' ? row.value : '' }

								</div>
						)
	}
]


	render() {
		return (
			<div>
			 <input className="search" placeholder="Search" onChange={this.handleSearch} onKeyUp={this.handleSearch}/>
				<ReactTable  style={{maxWidth:'1400px'}} className='shadow1'
		     data={this.state.clienti}
		     columns={this.columns}
				  loading={this.state.loading}
					showPagination= {false}
					defaultPageSize={this.state.pageSize}
					pageSize={this.state.pageSize}
					// filterable
defaultFilterMethod={(filter, data) =>{
	return data.filter(({codiceCliente,ragSociale12,cap,localita,pivaCEE}) => codiceCliente.indexOf(filter.value.toUpperCase()) > -1 ||  ragSociale12.indexOf(filter.value.toUpperCase()) > -1 ||  cap.indexOf(filter.value.toUpperCase()) > -1 ||  localita.indexOf(filter.value.toUpperCase()) > -1 || pivaCEE.indexOf(filter.value.toUpperCase()) > -1);

}
}



					defaultSorted={[
					{
						id: "fScaduto",
						desc: true
					},
					{
						id: "ragSociale12",
					}
				]}

				 getTdProps={(state, rowInfo) => ({
							onClick: () =>{
								this.setCliente(rowInfo.original.codiceCliente,rowInfo.original.ragSociale12)

							}
						})}
		   />
</div>
		);

	}
}



ClientiPage.propTypes = {
  user: PropTypes.shape({
 	 transactId: PropTypes.string.isRequired,
 	 user:PropTypes.string.isRequired,
 	 password:PropTypes.string.isRequired,
 	 lang:PropTypes.string.isRequired,
 }).isRequired,
};

function mapStateToProps(state){
  return{
    user: state.user
  }
}

export default connect(mapStateToProps,{selectCliente})(ClientiPage);
