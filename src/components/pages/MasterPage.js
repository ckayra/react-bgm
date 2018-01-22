import React from 'react';
import PropTypes from 'prop-types'
import imgSettings from '../../images/settings.png'
import imgLogoBgm from '../../images/logoBGM-New.png'
import UserAccount from '../navbar/useraccount'
import NavMenu from '../navbar/navmenu'
import HomePage from './HomePage'
import AgentiPage from './AgentiPage'
import DatiContabiliPage from './DatiContabiliPage'
import ClientiPage from './ClientiPage'
import UserRoute from '../routes/UserRoute'
import MasterRoute from '../routes/MasterRoute'
import NotClienteRoute from '../routes/NotClienteRoute'
import DefaultHomeRoute from '../routes/DefaultHomeRoute'

const MasterPage= ({location}) =>(
  <div className="wrapper">
  <div className="main-head">
    <div className="nav-burgermenu">MENU</div>
    <div className="nav-logo"><img src={imgLogoBgm} alt='logo' /></div>
    <div className="nav-agente"><i className="material-icons">supervisor_account</i>GI.RA RAPPRESENTANZE SRL</div>
    <div className="nav-cliente"><i className="material-icons">person</i>GLOBE STORE DI ROCCA ANNA E F.LLI SNC (FANTASA WD)</div>
    <div className="nav-carrello"><i className="material-icons">shopping_cart</i>2 Articoli € 123,45</div>
    <UserAccount   />
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
    <div className="nav-ricerca"><input type="search" placeholder="Search"/></div>
      <ul>
      <li>Menu 1</li>
      <li>Menu 1</li>
      <li>Menu 1</li>
      </ul>
    </div>
  </div>
  <div className="main-content">
  CONTENT
  <DefaultHomeRoute location={location} path="/home" exact component={HomePage}/>
  <MasterRoute location={location} path="/agenti" exact component={AgentiPage}/>
  <NotClienteRoute location={location} path="/clienti" exact component={ClientiPage}/>
  <UserRoute location={location} path='/daticontabili' exact component={DatiContabiliPage}/>
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
