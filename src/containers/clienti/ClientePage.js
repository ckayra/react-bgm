import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { Button,  Form,Container ,Message} from 'semantic-ui-react'
import api from '../../api'

class ClientePage extends React.Component {

  componentDidMount() {
    if (this.props.location.state && this.props.location.state.codiceCliente)
      api.clienti.getCliente(this.props.user, this.props.location.state.codiceCliente).then(cliente => {
        if (cliente) {
          console.log(cliente[0].ragSociale1)
        } else {
          console.log('error')
        }
      });
  }



  render(){
    return(
      <Container>
      <Form size='tiny'>
    <Form.Field>
      <label>Ragione Sociale</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Partita Iva</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Indirizzo</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>CAP</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Località</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Codice Fiscale</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Commerciale</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Commerciale</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Commerciale</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Ordini</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Ordini</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Ordini</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Fatturazione</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Fatturazione</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Email Fatturazione</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Pagamento</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Iban</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Data inizio attività</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Tipo cliente</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Zona</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Listino</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Spedizione</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Form.Field>
      <label>Porto</label>
      <input placeholder='Last Name' />
    </Form.Field>
    <Button type='submit'>Submit</Button>
  </Form>
  </Container>
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
