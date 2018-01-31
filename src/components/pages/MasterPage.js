import React from 'react';
import PropTypes from 'prop-types'
import imgSettings from '../../images/settings.png'
import imgLogoBgm from '../../images/logoBGM-New.png'
import UserAccount from '../navbar/useraccount'
import Agente from '../navbar/agente'
import Cliente from '../navbar/cliente'
import NavMenu from '../navbar/navmenu'
import HomePage from './HomePage'
import AgentiPage from './AgentiPage'
import DatiContabiliPage from './DatiContabiliPage'
import ClientiPage from './ClientiPage'
import ClientePage from './ClientePage'
import UserRoute from '../routes/UserRoute'
import MasterRoute from '../routes/MasterRoute'
import NotClienteRoute from '../routes/NotClienteRoute'
import DefaultHomeRoute from '../routes/DefaultHomeRoute'

const MasterPage= ({location}) =>(
  <div className="wrapper">
  <div className="main-head shadow2">
    <div className="nav-burgermenu">MENU</div>
    <div className="nav-logo"><img src={imgLogoBgm} alt='logo' /></div>
    <Agente />
    <Cliente />

    <div className="nav-carrello"><i className="material-icons">shopping_cart</i>2 Articoli € 123,45</div>
    <UserAccount   />
      <div className="nav-ricerca"><input type="search" placeholder="Cerca"/></div>

    <NavMenu />
  </div>
  <div className="main-leftsidebar" >
    <div className="main-leftsidebar-commands">
      <div className="nav-menucataweb">
        <i className="material-icons">reorder</i>
      </div>
      <div className="nav-condizioni"><img src={imgSettings} alt='settings' /></div>
    </div>
    <div>
      <ul>
      <li>Menu 1</li>
      <li>Menu 1</li>
      <li>Menu 1</li>
      </ul>
    </div>
  </div>
  <div className="main-content">

  <DefaultHomeRoute location={location} path="/home" exact component={HomePage}/>
  <MasterRoute location={location} path="/agenti" exact component={AgentiPage}/>
  <NotClienteRoute location={location} path="/clienti" exact component={ClientiPage}/>
  <UserRoute location={location} path='/daticontabili'  component={DatiContabiliPage}/>
    <NotClienteRoute location={location} path="/cliente" exact component={ClientePage}/>

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
