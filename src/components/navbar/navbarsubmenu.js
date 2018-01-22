import React from 'react'
import NavBarItem from './navbaritem'

const NavBarSubMenu=(props) =>{

  return(
    <div  className="nav-submenu"  >
         {
           props.items.map(item => <NavBarItem key={item.text} item={item}></NavBarItem>)

         }
    </div>
  )
}



export default NavBarSubMenu
