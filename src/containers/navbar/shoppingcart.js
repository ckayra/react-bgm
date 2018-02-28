import React from 'react';
import PropTypes from 'prop-types'
import {connect} from 'react-redux'

const ShoppingCart = (props ) => (
    props.importoCarrello==='' ?  <div /> : <div className="nav-carrello"><i className="material-icons">shopping_cart</i>{props.nrItems} Articoli € {props.importoCarrello}</div>
);

ShoppingCart.defaultProps={
  importoCarrello: '',
  nrItems:''
}

ShoppingCart.propTypes = {
  importoCarrello: PropTypes.string,
  nrItems: PropTypes.string,
};

function mapStateToProps(state){
  return{
    importoCarrello: state.carrello &&  state.carrello.totali ? state.carrello.totali.valNetto : '',
    nrItems: state.carrello &&  state.carrello.totali ? state.carrello.totali.nrRighe : '',
  }
}

export default connect(mapStateToProps)(ShoppingCart);
