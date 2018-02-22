import React from 'react'
import PropTypes from 'prop-types'



const FloatMenu = (position, categorie) => (
  <div className="float-menu" style={{top:position.top,left:position.left}}>
  <li>
  {
    categorie.map((cat =>
      <ul>{cat.desCategoria}</ul>
    ))
  }
  </li>
  </div>
)


FloatMenu.propTypes={
  position: PropTypes.shape({
    top: PropTypes.number,
    left: PropTypes.numer}
  ).isRequired,
categorie:PropTypes.arrayOf({
  categoriaWeb: PropTypes.string,
  desCategoria:PropTypes.string
}).isRequired,

}


export default FloatMenu
