import React, {PropTypes} from 'react';
import { NavLink  } from 'react-router-dom';

export default class NavLinks extends React.Component {


  render() {

    return (
        <div>
        <NavLink  {...this.props} activeClassName='active' >{this.props.text}</NavLink >
        </div>

    );
  }
}
