import React from 'react';
import PropTypes from 'prop-types'
import imgLogoBgm from '../../images/logoBGM-New.png'
import UserAccount from '../navbar/useraccount'
import Agente from '../navbar/agente'
import Cliente from '../navbar/cliente'
import ShoppingCart from '../navbar/shoppingcart'
import NavMenu from '../navbar/navmenu'
import HomePage from '../home/HomePage'
import AgentiPage from '../agenti/AgentiPage'
import DatiContabiliPage from '../daticontabili/DatiContabiliPage'
import ClientiPage from '../clienti/ClientiPage'
import ClientePage from '../clienti/ClientePage'
import UserRoute from '../../routes/UserRoute'
import MasterRoute from '../../routes/MasterRoute'
import NotClienteRoute from '../../routes/NotClienteRoute'
import DefaultHomeRoute from '../../routes/DefaultHomeRoute'
import LeftMenu from '../../components/leftMenu/LeftMenu'
import CarrelliApertiPage from '../carrelliaperti/CarrelliApertiPage'
import CarrelloPage from '../carrello/CarrelloPage'


const MasterPage= ({location}) =>(
  <div className="wrapper">
  <div className="main-head shadow2">
    <div className="nav-burgermenu">MENU</div>
    <div className="nav-logo"><img src={imgLogoBgm} alt='logo' /></div>
    <Agente />
    <Cliente />
    <ShoppingCart />

    { /*  <div className="nav-carrello"><i className="material-icons">shopping_cart</i>2 Articoli € 123,45</div> */}
    <UserAccount   />
      <div className="nav-ricerca"><input type="search" placeholder="Cerca"/></div>

    <NavMenu />
  </div>

  <LeftMenu />

  <div className="main-content">

  <DefaultHomeRoute location={location} path="/home" exact component={HomePage}/>
  <MasterRoute location={location} path="/agenti" exact component={AgentiPage}/>
  <NotClienteRoute location={location} path="/clienti" exact component={ClientiPage}/>
  <UserRoute location={location} path='/daticontabili'  component={DatiContabiliPage}/>
  <NotClienteRoute location={location} path="/cliente" exact component={ClientePage}/>
  <UserRoute location={location} path='/carrelli'  component={CarrelliApertiPage}/>
  <UserRoute location={location} path='/carrello'  component={CarrelloPage}/>


  </div>
  <div className="main-footer">FOOTER</div>
</div>
)
MasterPage.propTypes={
	location: PropTypes.shape({
		pathname: PropTypes.string.isRequired
	}).isRequired
}


export default MasterPage;
