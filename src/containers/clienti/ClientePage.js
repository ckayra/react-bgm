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
      <label>First Name</label>
      <input placeholder='First Name' />
    </Form.Field>
    <Form.Field>
      <label>Last Name</label>
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
