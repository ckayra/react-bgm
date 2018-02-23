import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import {Card,Container,Checkbox,Label,Icon,Header,Segment,Image,Menu} from 'semantic-ui-react'
import {actions as  carrelliActions} from './carrelliaperti'


class InfoCarrello extends React.Component{


  state = {
      user: this.props.user,
      cart: this.props.cart,
    };

  // toggleAttivo=()=>{
  //   this.props.onLoginRequest(this.state.user)
  // }

  onToggleSospeso=()=> {
      this.props.toggleSospeso(this.props.user,this.props.cart.nrdocumento);
    }



  render(){

    return(
      <Card

      >

      <Card.Content>

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
      <Menu borderless={true} compact={true} size='tiny'>
      <Menu.Item>
      <Icon name='trash' color='red' label='Attivo'/>
      </Menu.Item>

      <Menu.Item>
      {`Creato il ${this.props.cart.testata.birthday}`} <br/> {`Ultima mod. ${this.props.cart.testata.dateLastchange}` }
      </Menu.Item>
      <Menu.Item>
      <Checkbox toggle checked={this.props.cart.testata.sospeso!=='S'} onClick={this.onToggleSospeso}/></Menu.Item>
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
toggleSospeso:PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
    toggleSospeso: (user,nrdocumento) => {
      dispatch(carrelliActions.toggleSospeso(user,nrdocumento));
  }})


// const mapDispatchToProps = (dispatch) => ({
//   onToggleSospeso: nrdocumento => {
//  dispatch(carrelliActions.toggleSospeso(nrdocumento));
//  },
//   //  onToggleSospeso: bindActionCreators(carrelliActions.toggleSospeso, dispatch),
//   //  onToggleSospeso: (nrdocumento) => { dispatch (carrelliActions.toggleSospeso(nrdocumento))}
// })

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}


export default connect(mapStateToProps,mapDispatchToProps)(InfoCarrello);
