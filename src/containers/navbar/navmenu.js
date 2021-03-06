import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types'
import NavBarLink from './navbarlink'
import NavBarSubMenu from './navbarsubmenu'

class NavMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSubMenu: ''
    }
  }

  onItemClick = (event,data) => {
    if (this.state.showSubMenu===data){
      this.setState({showSubMenu:''})
    } else  this.setState({showSubMenu: data})
  }


  itemsCataloghi = [{"text": "Catalogo Web","url": "/catalogoweb"},
  {"text": "Sfoglia Cataloghi","url": "sfogliacataloghi"},
  {"text": "Download Immagini","url": "downloadimmagini"}];
  itemsOrdini = [{"text": "Nuovo Carrello","url": "nuovocarrello"},
  {"text": "Immissione da File/Lista","url": "immisionelista"},
  {"text": "Ricerca per parola chiave","url": "ricerca"}];
  itemsBackOffice = [{"text": "Dati Contabili","url": "daticontabili"},
  {"text": "Ordini in corso","url": "ordiniincorso"},
  {"text": "Fatture","url": "fatture"},
  {"text":"Area Riservata","url":"areariservata"}];
  itemsVisualizza = [{"text": "Con Prezzi","url": "visualizzaconprezzi"},
  {"text": "Senza Prezzi","url": "visualizzasenzaprezzi"},
  {"text": "Prezzi Suggeriti","url": "visualizzaprezzisuggeriti"}]

  render(){
    return (
      <div className="nav-menu">
        <NavBarLink className={this.props.isNavCarrelliEnabled ? '' : 'nav-disabled'}   to="/carrelli" text="Carrelli Aperti" />
        <NavBarSubMenu text="Ordini" items={this.itemsOrdini} value="ordini" className={this.props.isNavOrdiniEnabled ? '' : 'nav-disabled'} onClick={(e)  => this.onItemClick(e,'ordini')} showSubMenu={this.state.showSubMenu} />
        <NavBarSubMenu text="Cataloghi" items={this.itemsCataloghi} value="cataloghi" className={this.props.isNavCataloghiEnabled ? '' : 'nav-disabled'} onClick={(e) => this.onItemClick(e,'cataloghi')} showSubMenu={this.state.showSubMenu} />
        {this.props.isNavAgentiVisible &&  <NavBarLink  to="/agenti" text="Agenti" />}
        {this.props.isNavClientiVisible &&  <NavBarLink  to="/clienti" className={this.props.isNavClientiEnabled ? '' : 'nav-disabled'}  text="Clienti" />}
        <NavBarSubMenu text="Back Office" items={this.itemsBackOffice} value="backoffice" className={this.props.isNavBackOfficeEnabled ? '' : 'nav-disabled'} onClick={(e) => this.onItemClick(e,'backoffice')} showSubMenu={this.state.showSubMenu} />
        {this.props.isNavNuovoClienteVisible && <NavBarLink  to="/cliente" className={this.props.isNavNuovoClienteEnabled ? '' : 'nav-disabled'} text="Nuovo cliente" />}
        <NavBarSubMenu text="Visualizza" items={this.itemsVisualizza} value="visualizza" className={this.props.isNavVisualizzaEnabled ? '' : 'nav-disabled'} onClick={(e) => this.onItemClick(e,'visualizza')} showSubMenu={this.state.showSubMenu} />
        <NavBarLink  to="/carrello" text="Carrello" className={this.props.isNavCarrelloEnabled ? 'nav-menu-link' : 'nav-disabled'} />
      </div>
    );
  }
}

NavMenu.propTypes = {
  isNavClientiVisible:PropTypes.bool.isRequired,
  isNavAgentiVisible:PropTypes.bool.isRequired,
  isNavNuovoClienteVisible:PropTypes.bool.isRequired,
  isNavOrdiniEnabled:PropTypes.bool.isRequired,
  isNavCataloghiEnabled:PropTypes.bool.isRequired,
  isNavBackOfficeEnabled:PropTypes.bool.isRequired,
  isNavNuovoClienteEnabled:PropTypes.bool.isRequired,
  isNavVisualizzaEnabled:PropTypes.bool.isRequired,
  isNavCarrelloEnabled:PropTypes.bool.isRequired,
  isNavClientiEnabled:PropTypes.bool.isRequired,
  isNavCarrelliEnabled:PropTypes.bool.isRequired

};

function mapStateToProps(state){
  return{
    isNavCarrelliEnabled: state.user.user!=='' ,
    isNavClientiVisible: !!(state.user.tipoUtente==='M' || state.user.tipoUtente==='A'),
    isNavAgentiVisible: state.user.tipoUtente==='M',
    isNavNuovoClienteVisible: state.user.tipoUtente==='M' || state.user.tipoUtente==='A',
    isNavOrdiniEnabled: state.user.codiceCliente!=='',
    isNavCataloghiEnabled: state.user.codiceCliente!=='',
    isNavBackOfficeEnabled: state.user.codiceCliente!=='',
    isNavNuovoClienteEnabled: state.user.codiceAgente!=='',
    isNavVisualizzaEnabled: state.user.codiceCliente!=='' ,
    isNavCarrelloEnabled: state.carrello!==undefined && state.carrello!=={},
    isNavClientiEnabled:  state.user.tipoUtente==='A' || (state.user.tipoUtente==='M' && state.user.codiceAgente!=='' ),
  }
}

export default connect(mapStateToProps,null,null,{pure: false})(NavMenu);
