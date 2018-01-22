import React from 'react'
import { connect } from "react-redux";
import NavBarItem from './navbaritem'
import styles from '../../css/navmenu.css';

const NavMenu = ({isNavClientiVisible,isNavAgentiVisible,isNavNuovoClienteVisible,isNavClientiEnabled}) => {
    // return (
    //   <div className="nav-menu">
    //     <NavLink  to="/carrelliaperti" text="Carrelli aperti" />
    //     <NavLink  to="/ordini" text="Ordini" />
    //
    //       <Dropdown compact  text='Cataloghi' >
    //       <Dropdown.Menu   >
    //        <Dropdown.Item  ><NavLink  to="/catalogoweb" text="Catalogo Web" /></Dropdown.Item>
    //        <Dropdown.Item text="Sfoglia Cataloghi" />
    //       <Dropdown.Item text="Download immagini" />
    //       </Dropdown.Menu>
    //       </Dropdown>
    //
    //
    //     {isNavClientiVisible &&  <NavLink  to="/clienti" className={isNavClientiEnabled ? '' : 'nav-disabled'}  text="Clienti" />}
    //     {isNavAgentiVisible &&  <NavLink  to="/agenti" text="Agenti" />}
    //     <NavLink  to="/backoffice" text="Back office" />
    //     {isNavNuovoClienteVisible && <NavLink  to="/nuovocliente" text="Nuovo cliente" />}
    //     <div>Visualizza</div>
    //     <NavLink  to="/carrello" text="Carrello" />
    //   </div>
    // );
var data = [
  {
    "text": "Carrelli aperti",
    "url": "carrelliaperti"
  },
  {
    "text": "Link 2",
    "url": "#"
  },
  {
    "text": "Link 3",
    "url": "#",
    "submenu": [
      {
        "text": "Sublink 1",
        "url": "#",
        "submenu": [
          {
            "text": "SubSublink 1",
            "url": "#"
          }
        ]
      },
      {
        "text": "Sublink 2",
        "url":"#",
        "submenu": [
          {
            "text": "SubSublink 2",
            "url": "#"
          }
        ]
      }
    ]
  }
]
    return(
      <div className="nav-menu">

             {

               data.map(item => <NavBarItem key={item.text} item={item}></NavBarItem>)
             }
      </div>
    )
}


function mapStateToProps(state){
  return{
    isNavClientiVisible: !!(state.user.tipoUtente==='M' || state.user.tipoUtente==='A'),
    isNavAgentiVisible: state.user.tipoUtente==='M',
    isNavNuovoClienteVisible: state.user.tipoUtente==='M' || state.user.tipoUtente==='A',
    isNavClientiEnabled: state.user.tipoUtente==='A' || (state.user.tipoUtente==='M' && state.user.codiceAgente!=='')
  }
}

export default connect(mapStateToProps,null,null,{pure: false})(NavMenu);
