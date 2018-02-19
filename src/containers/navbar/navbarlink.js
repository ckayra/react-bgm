import React  from 'react';
import PropTypes from 'prop-types'
import { NavLink  } from 'react-router-dom';

const NavBarLink = ({...props}) =>(
        <NavLink  {...props} className={`nav-link ${props.className}`}  >{props.text}</NavLink >
)

NavBarLink.defaultProps={
  className: ''
}

NavBarLink.propTypes={
  text: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  className: PropTypes.string,
}
export default NavBarLink
