import React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import { selectAgente } from "../../actions/auth";
import Table from "../../components/table/table";
import {getAgentiRequest} from './agentiActions'

class AgentiPage extends React.Component {


  componentDidMount() {
    if (!this.agenti) getAgentiRequest(this.props.user)
  }

  setAgente = rowdata => {
    this.props.selectAgente(rowdata);
    this.props.history.push("/clienti");
  };

  columns = [
    {
      title: "Cod. Agente",
      field: "codiceAgente",
      maxWidth: 100,
      align: "right"
    },
    { title: "Ragione Sociale", field: "desAgente" }
  ];

  render() {
    return (
      <Table
        data={this.props.agenti}
        columns={this.columns}
        loading={this.props.apiRequest.requesting}
        pageSize={this.props.agenti ? this.props.agenti.length : 0}
        onRowClick={this.setAgente}
        style={{ maxWidth: "700px" }}
        sort={[{ field: "codiceAgente", order: "asc" }]}
        filter
      />
    );
  }
}
AgentiPage.defaultProps ={
  agenti:[],
}

AgentiPage.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  selectAgente: PropTypes.func.isRequired,
  agenti:PropTypes.arrayOf( PropTypes.shape({
     codice: PropTypes.string,}
   )),
   apiRequest: PropTypes.shape({
     errors: PropTypes.array,
     requesting: PropTypes.bool,
     successful: PropTypes.bool,
   }).isRequired,


};
function mapStateToProps(state) {
  return {
    user: state.user,
    agenti: state.agenti,
    apiRequest:state.apiRequest,
  };
}

export default connect(mapStateToProps, { getAgentiRequest,selectAgente })(AgentiPage);
