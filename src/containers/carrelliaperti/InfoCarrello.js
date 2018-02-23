import React from 'react'
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Card,Container,Checkbox,Label,Icon,Header,Segment,Image,Menu} from 'semantic-ui-react'

class InfoCarrello extends React.Component{

  render(){
    return(
      <Card

      >

      <Card.Content>

      <Header size='small'  floated='right' textAlign='center'>
      {`${this.props.cart.nrItem} pz.`}
      <Header.Subheader>
      {this.props.cart.tipoCarr}
      </Header.Subheader>
      </Header>
      <Header size='small' floated='left'>

      {`${this.props.cart.desCliente} (${this.props.cart.cliente})   `}
      <Label.Detail></Label.Detail>
      <Header.Subheader>
      {this.props.cart.desAgente}
      </Header.Subheader>
      </Header>

      <Card.Description content={`${this.props.cart.nota01}${this.props.cart.nota02}${this.props.cart.nota03}${this.props.cart.nota04}${this.props.cart.nota05}${this.props.cart.nota06}${this.props.cart.nota07}${this.props.cart.nota08}${this.props.cart.nota09}${this.props.cart.nota10}` }/>

      <Card.Meta content={this.props.cart.nrdocumento} />

      </Card.Content>
     <Menu borderless={true} compact={true} size='tiny'>
         <Menu.Item>
          <Icon name='trash' color='red' label='Attivo'/>
 </Menu.Item>

        <Menu.Item>
          {`Creato il ${this.props.cart.birthday}`} <br/> {`Ultima mod. ${this.props.cart.dateLastchange}` }
</Menu.Item>
        <Menu.Item>
            <Checkbox toggle checked={this.props.cart.sospeso===''} /></Menu.Item>
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
    agente: PropTypes.string,
    desAgente: PropTypes.string,
  }
).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
  };
}


export default connect(mapStateToProps)(InfoCarrello);
