import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import { connect } from "react-redux";
import { logoutRequest,setLanguage } from "../login/loginActions";
import  '../../css/nav-user.css';

class UserAccout extends React.Component {
  dologout = () => this.props.logoutRequest(this.props.user)

  render() {
    const dropUser=(
      <Dropdown className="nav-user"    text={this.props.username}   icon='user circle'>
        <Dropdown.Menu   >
          <Dropdown.Item text="Logout"  onClick={this.dologout} />
          <Dropdown.Item text="EN" onClick={() => this.props.setLanguage("02")}/>
          <Dropdown.Item text="IT" onClick={() => this.props.setLanguage("01")} />
        </Dropdown.Menu>
      </Dropdown>
    )

    return(
      dropUser
    )
  }
}

UserAccout.propTypes = {
  username: PropTypes.string.isRequired,
  logoutRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    lang:PropTypes.string.isRequired,
  }).isRequired,
  setLanguage: PropTypes.func.isRequired
};

function mapStateToProps(state){
  return{
    isLoggedIn: !!state.user.user,
    username: state.user.user || '',
    user:state.user,
  }
}

export default connect(mapStateToProps,{logoutRequest,setLanguage})(UserAccout);
