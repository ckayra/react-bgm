
import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {Container} from 'semantic-ui-react'
import LoginForm from "../forms/LoginForm";
import ChangePasswordForm from "../forms/ChangePasswordForm";
import { login,changepassword } from "../../actions/auth";
import ErrorBoundary from '../utils/ErrorBoundary';

class LoginPage extends React.Component  {

  submit = data => this.props.login(data).then(() => {if (!this.props.mustChangePassword)  this.props.history.push("/Home") })

  changeThePassword = data =>     this.props.changepassword( this.props.user, data.confirmpassword).then(() => this.props.history.push("/Home") )

  render() {
    return (
      <Container>
      <div>
        <h1>Login page</h1>
        <ErrorBoundary>
         { this.props.mustChangePassword ?  <ChangePasswordForm submit={this.changeThePassword} /> :  <LoginForm submit={this.submit} />}
        </ErrorBoundary>
      </div>
      </Container>
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
  user: PropTypes.shape({
 	 transactId: PropTypes.string.isRequired,
 	 user:PropTypes.string.isRequired,
 	 password:PropTypes.string.isRequired,
 	 lang:PropTypes.string.isRequired,
 }).isRequired
};

function mapStateToProps(state){
  return{
    mustChangePassword: state.user.changePwd==='S',
    user: state.user
  }
}

export default connect(mapStateToProps, { login, changepassword })(LoginPage);
