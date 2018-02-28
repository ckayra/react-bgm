import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {withRouter} from "react-router-dom";
import {Card,Checkbox,Label,Icon,Header,Menu} from 'semantic-ui-react'
import {actions as  carrelliActions} from './carrelliaperti'
import {actions as  carrelloActions} from '../carrello/carrello'
import FormatDate from '../../components/utils/FormatDate'

class InfoCarrello extends React.Component{


  state = {
      user: this.props.user,
      cart: this.props.cart,
    };



  onToggleSospeso=()=> {
      this.props.toggleSospeso(this.props.user,this.props.cart);
    }

    onSelectCart=() =>{
    // #TODO se carrello diverso cancellare prima il precedente carrello dallo stato
     this.props.history.push({pathname:"carrello",state: { nrdocumento: this.props.cart.nrdocumento }});
    }


  render(){

    return(
      <Card

      >

      <Card.Content onClick={this.onSelectCart} style={{cursor:'pointer'}}>

      <Header size='small'  floated='right' textAlign='center'>
      {`${this.props.cart.testata.nrItem} pz.`}
      <Header.Subheader>
      {this.props.cart.testata.tipoCarr}
      </Header.Subheader>
      </Header>
      <Header size='small' floated='left'>

      {`${this.props.cart.testata.desCliente} (${this.props.cart.testata.codCliente})   `}
      <Label.Detail></Label.Detail>
      <Header.Subheader>
      {this.props.cart.testata.desAgente}
      </Header.Subheader>
      </Header>

      <Card.Description content={`${this.props.cart.testata.note}` }/>

      <Card.Meta content={this.props.cart.nrdocumento} />

      </Card.Content>
      <Menu borderless={true} compact={true} >
      <Menu.Item>
      <Icon name='trash' color='red' label='Attivo' />
      </Menu.Item>

      <Menu.Item>
      {`Creato il ${FormatDate(this.props.cart.testata.birthday)}`} <br/> {`Ultima mod. ${FormatDate(this.props.cart.testata.dateLastchange)}` }
      </Menu.Item>
      <Menu.Item>
      <Checkbox toggle checked={!this.props.cart.testata.sospeso} onClick={this.onToggleSospeso}/></Menu.Item>
      </Menu>
      </Card>
    )
  }
}



InfoCarrello.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    codiceAgente:PropTypes.string.isRequired
  }).isRequired,
  cart: PropTypes.shape({
    nrdocumento: PropTypes.string,
    testata:PropTypes.shape({
    codAgente: PropTypes.string,
    desAgente: PropTypes.string,
    nrItem:PropTypes.string.isRequired,
    tipoCarr: PropTypes.string.isRequired ,
desCliente: PropTypes.string.isRequired,
codCliente:PropTypes.string.isRequired,
birthday:PropTypes.string.isRequired,
dateLastchange:PropTypes.string.isRequired,
sospeso:PropTypes.bool.isRequired
}).isRequired
  }
).isRequired,
toggleSospeso:PropTypes.func.isRequired,
history: PropTypes.shape({
  push: PropTypes.func.isRequired
}).isRequired,
onSetCarrelloInUso:PropTypes.func.isRequired,

};


const mapDispatchToProps = (dispatch) => ({
    toggleSospeso: (user,cart) => {
      dispatch(carrelliActions.toggleSospeso(user,cart));
  },
  onSetCarrelloInUso: (nrdocumento) => {
    dispatch(carrelloActions.setCarrelloInUso(nrdocumento));
},
})


function mapStateToProps(state) {
  return {
    user: state.user,
  };
}


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(InfoCarrello));
