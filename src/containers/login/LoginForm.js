import React  from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button,  Form,Container ,Message,Input} from 'semantic-ui-react'
import { withRouter} from 'react-router-dom'
import {actions as  loginActions} from './login'
import imgLogoBgm from '../../images/logoBGM-New.png'

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

  onChange= (e) =>{
    console.log('e:',e.target.value);
    this.setState	({user:{...this.state.user, [e.target.name]: e.target.value}})
  }


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
    const { onChange } = this.onChange;
    return (
      <div className='centerv centerh' style={{height:'100%'}}>

      <div className="column shadow2" style={{maxWidth:'450px',width:'100%',padding:'20px', backgroundColor:' rgb(96, 125, 139)'}}>
<div className="nav-logo"  style={{position:'relative',top:'-40px',left:'60px'}} ><img src={imgLogoBgm} alt='logo'  /></div>



      <Form onSubmit={this.submit} loading={this.props.apiRequest.requesting} size='big' style={{width:'100%'}}>
      <Form.Field inline error={!!errors.user} onChange={onChange}>
      <input placeholder='user'   id="user" name="user" value={user.user}  onChange={this.onChange} style={{width:'100%'}}  />
      </Form.Field>

      <Form.Field inline error={!!errors.password}>
      <input  placeholder='password' type="password"  id="password" name="password" value={user.password} onChange={this.onChange} style={{width:'100%'}} />
      </Form.Field>


      <Button fluid  type='submit'>LOGIN</Button>
      </Form>
      {this.props.apiRequest.errors.length>0 &&  <Message
        error
        content={this.props.apiRequest.errors[0].body}
        />}

        </div>
        </div>


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
