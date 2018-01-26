import React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import api from "../../api";
import { selectAgente } from "../../actions/auth";
import Table from "../table/table";

class AgentiPage extends React.Component {
  state = {
    agenti: undefined,
    loading: true,
    pageSize: 10
  };

  componentDidMount() {
    api.agenti.getAgenti(this.props.user).then(agenti => {
      this.setState({ agenti, loading: false, pageSize: agenti.length });
    });
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
        data={this.state.agenti}
        columns={this.columns}
        loading={this.state.loading}
        pageSize={this.state.pageSize}
        onRowClick={this.setAgente}
        style={{ maxWidth: "700px" }}
        sort={[{ field: "codiceAgente", order: "asc" }]}
        filter
      />
    );
  }
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
  selectAgente: PropTypes.func.isRequired
};

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps, { selectAgente })(AgentiPage);
