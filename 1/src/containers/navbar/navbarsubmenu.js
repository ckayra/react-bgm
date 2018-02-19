import React from 'react'
import PropTypes from 'prop-types'
import { NavLink  } from 'react-router-dom';

const NavBarSubMenu=(props) =>(
  <div  className={props.className==='nav-disabled' ? 'nav-link nav-hassubmenu nav-disabled' : 'nav-link nav-hassubmenu'  }>
    <span role='link' tabIndex="-1"   onClick={((e) => props.onClick(e, 'cataloghi'))} className={props.className}>{props.text}</span>
    {props.showSubMenu===props.value ? (
      <div className="nav-submenu shadow2"  >
        {props.items.map( (item) =>
          <div key={item.text}>
            <NavLink  {...this.props} onClick={((e) => props.onClick(e, 'cataloghi'))} to={item.url} activeClassName='active' >{item.text}</NavLink >
            </div>
          )}

        </div>
      ):null
    }
  </div>
)

NavBarSubMenu.defaultProps={
  className: '',
}

NavBarSubMenu.propTypes={
  showSubMenu: PropTypes.string.isRequired,
  className: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string.isRequired,
    url:PropTypes.string.isRequired
  })).isRequired,
  text: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
}

export default NavBarSubMenu
