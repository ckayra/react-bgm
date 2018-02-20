import React  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button,  Form,Container ,Message} from 'semantic-ui-react'
import { withRouter} from 'react-router-dom'
import {actions as  loginActions} from './login'

class LoginForm extends React.Component {
  state={
    user:{
      user:"",
      password:""
    },
    errors: {},
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.apiRequest.successful) {
      this.props.history.push('/Home');
    }
  }

  onChange= e=> this.setState	({user:{...this.state.user, [e.target.name]: e.target.value}})

  submit= (e) =>{
    e.preventDefault()
    const errors= this.validate()
    this.setState({errors});

    if (Object.keys(errors).length===0)  {
      this.props.onLoginRequest(this.state.user)
    }
  }

  validate=() => {
    const errors={};
    if (!this.state.user.password) errors.password="Insert Password";
    if (!this.state.user.user) errors.user="Insert User Name";
    return errors;
  }

  render () {
    const { user, errors } = this.state;
    return (
       <Container>
         <h1>Login</h1>
      <Form onSubmit={this.submit} loading={this.props.apiRequest.requesting}>
        <Form.Field inline error={!!errors.user}>
          <label htmlFor="user" >User</label>
            <input
             id="user"
             name="user"
             value={user.user}
             onChange={this.onChange}
           />

        </Form.Field>
        <Form.Field inline error={!!errors.password}>
          <label htmlFor="password" >Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={user.password}
              onChange={this.onChange}
            />
        </Form.Field>
        <Button type='submit'>LOGIN</Button>
      </Form>
    {this.props.apiRequest.errors.length>0 &&  <Message
     error
     content={this.props.apiRequest.errors[0].body}
   />}

 </Container>


    )
  }
}


LoginForm.propTypes ={
  onLoginRequest:PropTypes.func.isRequired,
  apiRequest: PropTypes.shape({
    errors: PropTypes.array,
    requesting: PropTypes.bool,
    successful: PropTypes.bool,
  }).isRequired,
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
}

const mapDispatchToProps = (dispatch) => ({
    onLoginRequest: bindActionCreators(loginActions.loginRequest, dispatch),
})

const mapStateToProps = state => ({
  user: state.user,
  apiRequest:state.apiRequest
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LoginForm))
