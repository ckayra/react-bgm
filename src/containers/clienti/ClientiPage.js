import React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import api from "../../api";
import { selectCliente } from "../../actions/auth";
import Table from "../../components/table/table";
import {StringToImporto} from '../../components/utils/Importo'

class ClientiPage extends React.Component {
  state = {
    clienti: undefined,
    loading: true,
    pageSize: 50
  };

  componentDidMount() {
    api.clienti.getClienti(this.props.user).then(clienti => {
      if (clienti) {
        this.setState({ clienti, loading: false, pageSize: clienti.length });
      } else {
        this.setState({ clienti, loading: false });
      }
    });
  }

onRowClick=(rowdata,col) =>{
  this.props.selectCliente(rowdata);
  if (col.id==="colModifica") {this.props.history.push({pathname:"cliente",state: { codiceCliente: rowdata.codiceCliente }});}
  else this.props.history.push("daticontabili");

}

  // setCliente = rowdata => {
  //   this.props.selectCliente(rowdata);
  //   this.props.history.push("daticontabili");
  // };

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
        data={this.state.clienti}
        columns={this.columns}
        loading={this.state.loading}
        pageSize={this.state.pageSize}
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

ClientiPage.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
  }).isRequired,
  selectCliente: PropTypes.func.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { selectCliente })(ClientiPage);
