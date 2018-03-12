import React from "react";
import LoginForm from "./LoginForm";

class LoginPage extends React.Component  {


//  changeThePassword = data => this.props.changepassword( this.props.user, data.confirmpassword).then(() => this.props.history.push("/Home") )

  render() {
    return (
        <div style={{height:'100%'}}>
              <LoginForm submit={this.submit} />
        </div>
    );
  }
}



export default LoginPage;
