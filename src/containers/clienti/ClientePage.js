import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import api from '../../api'

class ClientePage extends React.Component {

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.codiceCliente)
      api.clienti.getCliente(this.props.user, this.props.location.state.codiceCliente).then(cliente => {
        if (cliente) {
          console.log(cliente)
        } else {
          console.log('error')
        }
      });
  }

  render(){
    return(
      <div >nuovo cliente</div>
    )
  }
}


ClientePage.defaultProps={
  codiceCliente: ''
}

ClientePage.propTypes={
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
  }).isRequired,
  codiceCliente: PropTypes.string,
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

export default connect(mapStateToProps)(ClientePage)
