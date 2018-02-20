import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { actions as loginActions } from "../login/login";
import  '../../css/nav-user.css';

class UserAccout extends React.Component {
  dologout = () => this.props.onLogoutRequest(this.props.user)

  render() {
    const dropUser=(
      <Dropdown className="nav-user"    text={this.props.username}   icon='user circle'>
        <Dropdown.Menu   >
          <Dropdown.Item text="Logout"  onClick={this.dologout} />
          <Dropdown.Item text="EN" onClick={() => this.props.onSetLanguage("02")}/>
          <Dropdown.Item text="IT" onClick={() => this.props.onSetLanguage("01")} />
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
  onLogoutRequest: PropTypes.func.isRequired,
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user:PropTypes.string.isRequired,
    password:PropTypes.string.isRequired,
    lang:PropTypes.string.isRequired,
  }).isRequired,
  onSetLanguage: PropTypes.func.isRequired
};

const mapDispatchToProps = (dispatch) => ({
    onLogoutRequest: bindActionCreators(loginActions.logoutRequest, dispatch),
    onSetLanguage: bindActionCreators(loginActions.setLanguage, dispatch),
})

function mapStateToProps(state){
  return{
    isLoggedIn: !!state.user.user,
    username: state.user.user || '',
    user:state.user,
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(UserAccout);
