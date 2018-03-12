import React from 'react'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button,  Form,Container ,Dropdown,Message} from 'semantic-ui-react'
import {actions as  clienteActions} from './cliente'
import {data6ToInputFormat} from '../../components/utils/FormatDate'


class ClientePage extends React.Component {


  state={
    cliente:this.props.cliente,
    errors: {},
    isNewCustomer:true
  }
  componentDidMount() {

    let codCliente=""
    if (this.props.location.state && this.props.location.state.codCliente){
      // this.props.onGetClienteRequest(this.props.user,  this.props.location.state.codiceCliente)
      codCliente= this.props.location.state.codCliente
    }

    this.props.onGetClienteRequest(this.props.user,  codCliente)

  }


  // shouldComponentUpdate(nextProps, nextState){
  //     return (nextState.cliente !== this.state.cliente);
  // }


  componentWillReceiveProps(nextProps) {

    if (nextProps.cliente!==this.props.cliente) {
      // response from getCliente, la prima volta ipsoto var nuovocliente


      this.setState({cliente:nextProps.cliente,isNewCustomer:false})
    }
  }

  onChange= (e) =>{
    // this.props.onClienteChange({cliente:{...this.state.cliente, [e.target.name]: e.target.value}})
    this.setState	({cliente:{...this.state.cliente, [e.target.name]: e.target.value}})
     if (e.target.name==='pivaCEE' || e.target.name==='codFiscale' ){
       console.log("call onCheckPi")
       this.props.onCheckPI(this.props.user, this.state.cliente.codNazione , this.state.cliente.forzaPivaI , this.state.cliente.pivaCEE ,  this.state.cliente.codFiscale ,  this.state.cliente.forzaFiscI )

     }
  }



  onDropChange= (e, result) => {
    const { name, value } = result
    //this.props.onClienteChange({cliente:{...this.state.cliente, [name]: value}})
    this.setState	({cliente:{...this.state.cliente, [name]: value}})
  }

  submit= (e) =>{
    e.preventDefault()
    const errors= this.validate()
    this.setState({errors});
    if (Object.keys(errors).length===0)  {

      // se nuovo cliente richiedo nuov codice
      if (this.state.isNewCustomer){
         this.props.onSaveClienteRequest(this.props.user,this.state.cliente)
        // .then(
      // invio mail
       // !this.props.apiRequest.errors &&  this.props.onSendMail(this.props.user,this.state.cliente ,this.props.cliente)
    //  )
    }

      else {
        this.props.onSendMail(this.props.user,this.state.cliente ,this.props.cliente)

      }
// rimando a carrello
      if ( !this.props.apiRequest.errors)  this.props.history.push({pathname:"carrello",state: { codCliente: this.state.cliente.codCliente }});
    }
  }

  validate=() => {
    const errors={};
    // if (!this.state.user.password) errors.password="Insert Password";
    // if (!this.state.user.user) errors.user="Insert User Name";
    return errors;
  }


  render(){

    if ( this.props.apiRequest.requesting) {
      return null;
    }

    return(
      <div style={{overflow:'auto',height:'100%'}} className='cliente'>
        <Container>
          <Form size='tiny' onSubmit={this.submit} loading={this.props.apiRequest.requesting} >
            <Form.Group inline>
              <Form.Field >
                <label className='width100' >Ragione Sociale</label>
                <input name='ragSociale1'  value={this.state.cliente.ragSociale1 || ''} maxLength='30' style={{width:'250px'}} onChange={this.onChange} />
              </Form.Field>
              <Form.Field >
                <label>Partita Iva</label>
                <input name='codNazione' disabled={!this.state.isNewCustomer}  value={this.state.cliente.codNazione || ''} maxLength='3' style={{width:'40px'}}   onChange={this.onChange}/>
                <input name='pivaCEE'  disabled={!this.state.isNewCustomer} value={this.state.cliente.pivaCEE || ''} maxLength='13' style={{width:'130px'}}   onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <label>Codice Fiscale</label>
                <input name='codFiscale'  disabled={!this.state.isNewCustomer}  value={this.state.cliente.codFiscale || ''}  maxLength='16' style={{width:'150px'}}  onChange={this.onChange}/>
              </Form.Field>
            </Form.Group >
            <Form.Group inline>
              <Form.Field>
                <label className='width100'  >Indirizzo</label>
                <input name='indirizzo' value={this.state.cliente.indirizzo || ''}  maxLength='30' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <label>CAP</label>
                <input name='cap' value={this.state.cliente.cap || ''} maxLength='9' style={{width:'70px'}}  onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <label>Località</label>
                <input name="localita" value={this.state.cliente.localita || ''}  maxLength='25' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
            </Form.Group >
            <Form.Group inline>
              <Form.Field>
                <label className='width100' >Email Commerciale</label>
                <input name='emailCOM1' type='email' value={this.state.cliente.emailCOM1 || ''}  maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailCOM2' type='email' value={this.state.cliente.emailCOM2 || ''} maxLength='50' style={{width:'250px'}}  onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailCOM3' type='email' value={this.state.cliente.emailCOM3 || ''} maxLength='50' style={{width:'250px'}}  onChange={this.onChange}/>
              </Form.Field>
            </ Form.Group >
            <Form.Group inline>
              <Form.Field>
                <label className='width100' >Email Ordini</label>
                <input name='emailOCL1' type='email' value={this.state.cliente.emailOCL1 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailOCL2' type='email' value={this.state.cliente.emailOCL2 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailOCL3' type='email' value={this.state.cliente.emailOCL3 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
                <label className='width100' >Email Fatturazione</label>
                <input name='emailFAT1' type='email' value={this.state.cliente.emailFAT1 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailFAT2' type='email' value={this.state.cliente.emailFAT2 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <input name='emailFAT3' type='email' value={this.state.cliente.emailFAT3 || ''} maxLength='50' style={{width:'250px'}} onChange={this.onChange}/>
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
                <label className='width100' >Data inizio attività</label>
                <input type='date' name='dataInizio' value={data6ToInputFormat(this.state.cliente.dataInizio )|| ''}  onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <label>Tipo cliente</label>
                <Dropdown  selection search  options={this.props.tabTipoclienti} value={this.state.cliente.codTipoCli}  name='codTipoCli' onChange={this.onDropChange} />
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
              <label className='width100' >Iban</label>
              <input name='codIban' value={this.state.cliente.codIban || ''}  onChange={this.onChange}/>
              </Form.Field>
              <Form.Field>
                <label>Listino</label>
                <Dropdown  selection search  options={this.props.tabListini} value={this.state.cliente.codLisV}  name='codLisV' onChange={this.onDropChange}/>
              </Form.Field>
              <Form.Field inline>
                <label>Pagamento</label>
                <Dropdown  selection search  options={this.props.tabPagamenti} value={this.state.cliente.codPagam} name='codPagam' onChange={this.onDropChange}/>
              </Form.Field>
            </Form.Group>
            <Form.Group inline>
              <Form.Field>
                <label className='width100' >Zona</label>
                <Dropdown  selection search options={this.props.tabZone} value={this.state.cliente.codZona}  name='codZona' onChange={this.onDropChange}/>
              </Form.Field>
              <Form.Field>
                <label>Spedizione</label>
                <Dropdown disabled  selection search options={this.props.tabSpedizioni} value={this.state.cliente.codSped}  name='codSped' onChange={this.onDropChange}/>
              </Form.Field>
              <Form.Field>
                <label>Porto</label>
                <Dropdown disabled  selection search options={this.props.tabRese} value={this.state.cliente.codResa}  name='codResa' onChange={this.onDropChange}/>
              </Form.Field>
            </Form.Group>
            <Button type='submit' disabled={this.state.cliente===this.props.cliente}>Salva</Button>
          </Form>
          {this.props.apiRequest.errors.length>0 &&  <Message
            error
            content={this.props.apiRequest.errors[0].body}
            />}
        </Container>
      </div>
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
  onSaveClienteRequest:PropTypes.func.isRequired,
  apiRequest: PropTypes.shape({
    errors: PropTypes.array,
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
  }).isRequired,
  onGetClienteRequest:PropTypes.func.isRequired,
  cliente:PropTypes.shape({
    ragSociale1:PropTypes.string.isRequired,
    codSped:PropTypes.string.isRequired
  }).isRequired,
  onClienteChange:PropTypes.func.isRequired,
  onCheckPI:PropTypes.func.isRequired,
  onSendMail:PropTypes.func.isRequired,
    tabTipoclienti:PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.string,
    text: PropTypes.string,
  })).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
  onSaveClienteRequest: bindActionCreators(clienteActions.saveClienteRequest, dispatch),
  onGetClienteRequest: bindActionCreators(clienteActions.getClienteRequest, dispatch),
  onClienteChange: bindActionCreators(clienteActions.getClienteRequest, dispatch),
  onCheckPI: bindActionCreators(clienteActions.checkPI, dispatch),
  onSendMail: bindActionCreators(clienteActions.sendMail, dispatch),

})

const mapStateToProps = state => ({
  user: state.user,
  apiRequest:state.apiRequest,
  cliente:state.cliente,
  tabPagamenti:state.tabelle.tabPagamenti,
  tabTipoclienti:state.tabelle.tabTipoclienti,
  tabZone:state.tabelle.tabZone,
  tabListini:state.tabelle.tabListini,
  tabSpedizioni:state.tabelle.tabSpedizioni,
  tabRese:state.tabelle.tabRese,
})

export default connect(mapStateToProps, mapDispatchToProps)(ClientePage)
