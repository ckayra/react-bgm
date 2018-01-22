import React from 'react'

const NavBarLink = (props)=>{

  const hasSubMenu=!!props.submenu
  console.log(hasSubMenu, props)

if (hasSubMenu){
  return( <a href={props.url}>{props.text}</a>)
} else return(<span>{props.text}</span>)


}


export default NavBarLink
