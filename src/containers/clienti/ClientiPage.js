import React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import {actions as clientiActions} from './clienti'
import {actions as userActions} from '../login/user'
import Table from "../../components/table/table";
import {StringToImporto} from '../../components/utils/Importo'

class ClientiPage extends React.Component {

  componentDidMount() {
    if (!this.props.clienti || this.props.clienti.length===0){
     this.props.onGetClienti(this.props.user)
    }
  }


onRowClick=(rowdata,col) =>{
  this.props.onSetCliente(this.props.user,rowdata.codiceCliente,rowdata.ragSociale12);
  if (col.id==="colModifica") {this.props.history.push({pathname:"cliente",state: { codiceCliente: rowdata.codiceCliente }});}
  else this.props.history.push("daticontabili");
}

  columns = [
    { title: "Cod. Cliente", field: "codiceCliente", maxWidth: 100 },
    { title: "Ragione Sociale", field: "ragSociale12" },
    { title: "CAP", field: "cap", maxWidth: 80 },
    { title: "Località", field: "localita" },
    { title: "P. Iva CEE", field: "pivaCEE", maxWidth: 120 },
    {
      title: "",
      field: "fScaduto",
      maxWidth: 40,
      align: "center",
      render: val =>
        val === "S" ? (
          <i className="material-icons icona-scaduto" title='scaduto/insoluti'>report_problem</i>
        ) : (
          ""
        )
    },
    {
      title: "scaduto",
      field: "scaduto",
      maxWidth: 100,
      align: "right",
      render: val => (val === "0,00" ? "" :  StringToImporto(val) )
    },
    {
      title: "",
      field: "",
      maxWidth: 40,
      align: "center",
      id: 'colModifica',
      render: () =>
          <i className="material-icons" title='Edit'>mode_edit</i>
    },
  ];

  render() {
    return (
      <Table
        data={this.props.clienti}
        columns={this.columns}
        loading={this.props.apiRequest.requesting}
        pageSize={this.props.clienti ? this.props.clienti.length : 0}
        onRowClick={this.onRowClick}
        style={{ maxWidth: "1400px" }}
        filter
        sort={[
          { field: "fScaduto", order: "desc" },
          { field: "ragSociale12", order: "asc" }
        ]}
      />
    );
  }
}
ClientiPage.defaultProps ={
  clienti:[],
}

ClientiPage.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
  }).isRequired,
  clienti:PropTypes.arrayOf( PropTypes.shape({
     codiceCliente: PropTypes.string,
     desCliente: PropTypes.string,
   }
   )),
  onGetClienti: PropTypes.func.isRequired,
  onSetCliente: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  apiRequest: PropTypes.shape({
    errors: PropTypes.array,
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    clienti: state.clienti,
    apiRequest:state.apiRequest,
  };
}

export default connect(mapStateToProps, { onGetClienti:clientiActions.getClienti,onSetCliente:userActions.setCliente })(ClientiPage);
