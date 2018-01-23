import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'



const Cliente = (props) => (
  props.descrizioneCliente==='' ? <div /> : <div className="nav-cliente"><i className="material-icons">person</i>{props.descrizioneCliente}</div>
);



Cliente.propTypes = {
  descrizioneCliente: PropTypes.string.isRequired,
};

function mapStateToProps(state){
  return{
    descrizioneCliente:  state.user.desCliente ? state.user.desCliente : '',
  }
}

export default connect(mapStateToProps)(Cliente);
