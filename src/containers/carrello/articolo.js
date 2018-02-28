import React from 'react'
import PropTypes from 'prop-types'

const Articolo= ({item}) =>{
  return(
    <div>{item.barcode}</div>
  )
}

Articolo.propTypes={
  item: PropTypes.shape({
    barcode:PropTypes.string
  }).isRequired
}

export default Articolo
