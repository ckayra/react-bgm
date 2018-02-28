import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {Item} from 'semantic-ui-react'
import {actions as carrelloActions} from './carrello'
import Articolo from './articolo'

class Carrello extends React.Component{



  componentDidMount() {
    if (this.props.location.state && this.props.location.state.nrdocumento){
      this.props.onGetCarrello(this.props.user,this.props.location.state.nrdocumento)
    }
  }


render(){

  return(
    <div style={{overflowY:'auto',height:'100%'}}>
           <Item.Group divided>
        {  console.log("CARRELLO",this.props.carrello)}
          {!!this.props.carrello && this.props.carrello.items &&  this.props.carrello.items.map((item) =>
            <Articolo key={item.barcode} item={item} />
          )}
           </Item.Group>
           </div>
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
  carrello:PropTypes.shape({
    testata:PropTypes.shape({
      codAgente:PropTypes.string
    }),
    totali:PropTypes.shape({
      valNetto:PropTypes.string
    }),
    nrdocumento: PropTypes.string,
    items:PropTypes.arrayOf( PropTypes.shape({
       prodotto: PropTypes.string,
       nrPos: PropTypes.string,
     }))
  }).isRequired
}

export default connect(mapStateToProps, { onGetCarrello:carrelloActions.getCarrello })(Carrello);
