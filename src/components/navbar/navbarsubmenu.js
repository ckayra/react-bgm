import React from 'react'
import { NavLink  } from 'react-router-dom';

const NavBarSubMenu=(props) =>(
    <div className="nav-hassubmenu">
      <span onClick={((e) => props.onClick(e, 'cataloghi'))} className={props.className}>{props.text}</span>
      {props.showSubMenu===props.value ? (
        <div className="nav-submenu shadow2">
          {props.items.map( item =>
              <div>

              <NavLink  {...this.props} onClick={((e) => props.onClick(e, 'cataloghi'))} to={item.url} activeClassName='active' >{item.text}</NavLink >
                </div>
          )}

        </div>
      ):null
    }
      </div>
  )



export default NavBarSubMenu
