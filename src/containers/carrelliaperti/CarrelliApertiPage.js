import React from 'react'
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import PropTypes from "prop-types";
import {Card,Container} from 'semantic-ui-react'
import {actions as carrelliActions} from './carrelliaperti'
import InfoCarrello from './InfoCarrello'

class CarrelliApertiPage extends React.Component{

  componentDidMount() {
    this.props.onGetCarrelli(this.props.user)
  }

  render(){
    return(
      <Container>
       <Card.Group>
    {  this.props.carrelli.map((cart =>
        <InfoCarrello cart={cart} />
      ))}
       </Card.Group>
       </Container>

    )
  }
}

CarrelliApertiPage.defaultProps ={
  carrelli:[],
}

CarrelliApertiPage.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired,
    codiceAgente:PropTypes.string.isRequired
}).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  carrelli:PropTypes.arrayOf( PropTypes.shape({
     nrdocumento: PropTypes.string,
     agente: PropTypes.string,
     desAgente: PropTypes.string,
   }
   )),
   apiRequest: PropTypes.shape({
     errors: PropTypes.array,
     requesting: PropTypes.bool,
     successful: PropTypes.bool,
   }).isRequired,
   onGetCarrelli: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    carrelli: state.carrelli,
    apiRequest:state.apiRequest,
  };
}

const mapDispatchToProps = (dispatch) => ({
    onGetCarrelli: bindActionCreators(carrelliActions.getCarrelli, dispatch),
  //  onSetAgente: bindActionCreators(userActions.setAgente,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(CarrelliApertiPage);
