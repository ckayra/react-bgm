import React from 'react'
import PropTypes from 'prop-types'
// import './errors.css'

// Iterate over each error object and print them
// in an unordered list
const Errors = (props) => {
  return (
    <div className="error">
        {props.message}
    </div>
  )
}

Errors.defaultProps={
  message:""
}

Errors.propTypes = {
  message: PropTypes.string,
}

export default Errors
