import React from 'react';
import PropTypes from 'prop-types'
import Navbar from '../navbar/Navbar'
import HomePage from '../homepage/HomePage'
import AgentiPage from '../agenti/AgentiPage'
import DatiContabiliPage from '../daticontabili/DatiContabiliPage'
import ClientiPage from '../clienti/ClientiPage'
import ClientePage from '../clienti/ClientePage'
import UserRoute from '../../routes/UserRoute'
import MasterRoute from '../../routes/MasterRoute'
import NotClienteRoute from '../../routes/NotClienteRoute'
import DefaultHomeRoute from '../../routes/DefaultHomeRoute'
import './Master.css'
 
const MasterPage= ({location}) =>(
  <div className="wrapper">
    <Navbar />
    <div className="main-leftsidebar" >LEFT</div>
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
