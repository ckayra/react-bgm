import React from 'react'
import PropTypes from 'prop-types'

class Carrello extends React.Component{

  state = {
      nrdocumento: this.props.nrdocumento,
    };
render(){

  return(
    <div>{this.state.nrdocumento}</div>
  )
  }
}

Carrello.propTypes = {
  nrdocumento:PropTypes.string.isRequired
}

export default Carrello;
