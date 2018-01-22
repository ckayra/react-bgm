import React from 'react';
import PropTypes from 'prop-types';
import {Dropdown} from 'semantic-ui-react';
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import  '../../css/nav-user.css';

class UserAccout extends React.Component {
  render() {
    const dropUser=(
      <Dropdown className="nav-user"    text={this.props.username}   icon='user circle'>
      <Dropdown.Menu   >
       <Dropdown.Item text="Logout"  onClick={logout(this.props.user)} />
        <Dropdown.Item text="Impostazioni" />
      </Dropdown.Menu>
      </Dropdown>
    )

return(
  dropUser
)
    // const spanLogin=(
    //   <div className="nav-user hover" onClick={() => { this.props.history.push('/login') }} >Login <i aria-hidden="true" className="user circle icon" /></div>
    // )
    //
    //   return(
    //     this.props.isLoggedIn ? dropUser : spanLogin
    //   )
  }
}



UserAccout.propTypes = {
  // history: PropTypes.shape({
  //   push: PropTypes.func.isRequired
  // }).isRequired,
  username: PropTypes.string.isRequired,
  isLoggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
};

function mapStateToProps(state){
  return{
    isLoggedIn: !!state.user.user,
    username: state.user.user || '',
    user:state.user,
  }
}

export default connect(mapStateToProps,{logout})(UserAccout);
