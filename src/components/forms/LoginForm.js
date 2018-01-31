import React  from 'react';
import {Form,Button, Message, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError';

class LoginForm extends React.Component{
	state={
		data:{
			user:'',
			password:''
		},
		loading: false,
		errors: {}
	}

	onChange= e=> this.setState	({data:{...this.state.data, [e.target.name]: e.target.value}})

	onSubmit = () =>{
		const errors= this.validate(this.state.data);
		this.setState({errors});

		// send submit to login page
		if (Object.keys(errors).length===0){
			this.setState({loading:true});
			this.props
			.submit(this.state.data)
			.catch(err => {
				if (err && err.response && err.response.data && err.response.data.errors ){
					this.setState({errors: err.response.data.errors, loading:false});
				}else {
					this.setState({errors: {global: `${  err}`}  , loading:false});
				}
			})
		}
	}

	validate=(data)=>{
		const errors={};
		if (!data.password) errors.password="Insert Password";
		if (!data.user) errors.user="Insert User Name";
		return errors;
	}

	render(){
		const {data,errors, loading}=this.state;
		return(
			<Form onSubmit={this.onSubmit} loading={loading}>
				<Form.Field error={!!errors && !!errors.user}>
					<label htmlFor='user'>User
					<input type='text' id='user' name='user' placeholder='insert user' value={data.user} onChange={this.onChange} />
</label>
			</Form.Field>
				{errors && errors.user && <InlineError text={errors.user}/>}
				<Form.Field error={!!errors && !!errors.password}>
					<label htmlFor='password'>Password
						<input type='password' id='password' name='password' placeholder='insert password' value={data.password} onChange={this.onChange} />
					</label>
				</Form.Field>
				{errors && errors.password && <InlineError text={errors.password}/>}
				{errors && errors.global && <Message negative icon>
					<Icon name="warning sign" />
					<Message.Content>
						<Message.Header>Si è verificato un errore</Message.Header>
						<p>{errors.global}</p>
					</Message.Content>
				</Message>}
				<Button primary>Login</Button>
			</Form>
		)
	}
}

LoginForm.propTypes={
	submit: PropTypes.func.isRequired
};

export default LoginForm;
