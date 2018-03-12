import React from 'react'
import PropTypes from 'prop-types'
import { connect } from "react-redux";
import {Menu,Icon,TextArea} from 'semantic-ui-react'
import LazyLoad from 'react-lazyload';
import {actions as carrelloActions} from './carrello'
import Articolo from './articolo'

class Carrello extends React.Component{



  componentDidMount() {
    if (this.props.location.state && this.props.location.state.nrdocumento){
      this.props.onGetCarrello(this.props.user,this.props.location.state.nrdocumento)
    }
  }


render(){
if (this.props.carrello.testata===undefined) return (<div/>)
  return(


<div className='divCarrello'>
  <div className='carrello-testata'>
  <Menu icon='labeled' stackable size='mini' >
      <Menu.Item name='Invia'  onClick={this.handleItemClick} > <Icon name='truck'/>Invia</Menu.Item>
      <Menu.Item name='Paga ora' onClick={this.handleItemClick} > <Icon name='euro'/>Paga ora</Menu.Item>
      <Menu.Item name='Elimina' onClick={this.handleItemClick} > <Icon name='trash'/>Elimina</Menu.Item>
      <Menu.Item name='Stampa'  onClick={this.handleItemClick} > <Icon name='print'/>Stampa</Menu.Item>
      <Menu.Item name='Export'  onClick={this.handleItemClick} > <Icon name='file excel outline'/>Esporta</Menu.Item>
      <Menu.Item name='Donwload immagini'  onClick={this.handleItemClick}> <Icon name='image'/>Download immagini</Menu.Item>
      <Menu.Menu position='right'>
        <Menu.Item header>{this.props.carrello.nrdocumento}<br/>{this.props.carrello.testata.tipoCarr}<br/>{this.props.carrello.testata.desDivisione}</Menu.Item>
      </Menu.Menu>
    </Menu>
     <TextArea rows={1} placeholder='Note' />
  </div>
      <div className='carrello-articoli'>
          {!!this.props.carrello && this.props.carrello.items &&  this.props.carrello.items.map((item,index) =>
            <LazyLoad height={152} offset={100} overflow  placeholder={<div style={{height:'152px',minHeight:'152px',backgroundColor:'green'}} />}>
              <Articolo key={item.barcode} item={item} pos={index+1} tipoUtente={this.props.user.tipoUtente}/>
            </LazyLoad>
          )}
      </div>
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
