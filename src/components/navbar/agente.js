import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const Agente = (props ) => (
    props.descrizioneAgente==='' ? <div /> :<div className="nav-agente"><i className="material-icons">supervisor_account</i>{props.descrizioneAgente}</div>
);

Agente.defaultProps={
  descrizioneAgente: '',
}

Agente.propTypes = {
  descrizioneAgente: PropTypes.string,
};

function mapStateToProps(state){
  return{
    descrizioneAgente:  state.user.desAgente ? state.user.desAgente : '',
  }
}

export default connect(mapStateToProps)(Agente);
