import React from "react";
import { connect } from "react-redux";
import "react-table/react-table.css";
import PropTypes from "prop-types";
import { bindActionCreators } from 'redux'
import Table from "../../components/table/table";
import {actions as agentiActions} from './agenti'
import {actions as userActions} from '../login/user'


class AgentiPage extends React.Component {


  componentDidMount() {
    if (!this.props.agenti || this.props.agenti.length===0)     this.props.onGetAgenti(this.props.user)

  }

  setAgente = rowdata => {
    if (this.props.user.codiceAgente!==rowdata.codiceAgente){
      this.props.onSetAgente(this.props.user,rowdata.codiceAgente,rowdata.desAgente);

    }
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
    lang: PropTypes.string.isRequired,
    codiceAgente:PropTypes.string.isRequired
}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  agenti:PropTypes.arrayOf( PropTypes.shape({
     codiceAgente: PropTypes.string,
     desAgente: PropTypes.string,
   }
   )),
   apiRequest: PropTypes.shape({
     errors: PropTypes.array,
     requesting: PropTypes.bool,
     successful: PropTypes.bool,
   }).isRequired,
   onGetAgenti: PropTypes.func.isRequired,
onSetAgente: PropTypes.func.isRequired

};
function mapStateToProps(state) {
  return {
    user: state.user,
    agenti: state.agenti,
    apiRequest:state.apiRequest,
  };
}

const mapDispatchToProps = (dispatch) => ({
    onGetAgenti: bindActionCreators(agentiActions.getAgenti, dispatch),
    onSetAgente: bindActionCreators(userActions.setAgente,dispatch)

  //  onSetAgente: bindActionCreators({ ...userActions.setAgente, ...userActions.unsetCliente }, dispatch)

})

export default connect(mapStateToProps, mapDispatchToProps)(AgentiPage);
