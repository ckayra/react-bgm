import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {actions as carrelloActions} from './carrello'


class Carrello extends React.Component{



  componentDidMount() {
    if (this.props.location.state && this.props.location.state.nrdocumento){
      this.props.onGetCarrello(this.props.user,this.props.location.state.nrdocumento)
    }
  }


render(){

  return(
    <div>{this.props.location.state.nrdocumento}</div>
  )
  }
}


function mapStateToProps(state) {
  return {
    user: state.user,
    carrello: state.carrello,
    apiRequest:state.apiRequest,
  };
}

Carrello.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string.isRequired,
    search: PropTypes.string.isRequired,
    hash: PropTypes.string.isRequired,
    state: PropTypes.shape({
      nrdocumento:PropTypes.string.isRequired
    }),
  }).isRequired,
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
  }).isRequired,
  onGetCarrello:PropTypes.func.isRequired,
}

export default connect(mapStateToProps, { onGetCarrello:carrelloActions.getCarrello })(Carrello);
