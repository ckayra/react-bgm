
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import LoginForm from "../forms/LoginForm";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import { login,changepassword } from "../../actions/auth";
import ErrorBoundary from '../utils/ErrorBoundary';

class LoginPage extends React.Component  {

  submit = data => this.props.login(data).then((res) => {if (!this.props.mustChangePassword)  this.props.history.push("/Home") })

  changeThePassword = data =>     this.props.changepassword( this.props.user, data.confirmpassword).then((res) => this.props.history.push("/Home") )

  render() {
    return (
      <div>
        <h1>Login page</h1>
        <ErrorBoundary>
         { this.props.mustChangePassword ?  <ChangePasswordForm submit={this.changeThePassword} /> :  <LoginForm submit={this.submit} />}
        </ErrorBoundary>
      </div>
    );
  }
}

LoginPage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
  login: PropTypes.func.isRequired,
  changepassword: PropTypes.func.isRequired,
  mustChangePassword: PropTypes.bool.isRequired,
};

function mapStateToProps(state){
  return{
    mustChangePassword: state.user.changePwd==='S',
    user: state.user
  }
}

export default connect(mapStateToProps, { login, changepassword })(LoginPage);
