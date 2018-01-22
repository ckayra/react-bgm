import React  from 'react';
import {Form,Button, Message} from'semantic-ui-react';
import PropTypes from 'prop-types'
import InlineError from '../messages/InlineError';


class ChangePasswordForm extends React.Component {
		state={
		data:{
			user:'',
			password:'',
			confirmpassword:''
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
		if (!data.confirmpassword) errors.confirmpassword="Insert Password";
		if (data.password !== data.confirmpassword) errors.global="Le password inserite non sono uguali";


		return errors;
	}
	
	render(){
		const {data,errors, loading}=this.state;
		return(
			<Form onSubmit={this.onSubmit} loading={loading}>
			
			<Form.Field error={!!errors && !!errors.password}>
				<label htmlFor='password'>Password</label>
				<input type='password' id='password' name='password' placeholder='insert password' value={data.password} onChange={this.onChange} />
			</Form.Field>
			{errors && errors.password && <InlineError text={errors.password}/>}
			<Form.Field error={!!errors && !!errors.confirmpassword}>
				<label htmlFor='confirmpassword'>Confirm Password</label>
				<input type='password' id='confirmpassword' name='confirmpassword' placeholder='confirm password' value={data.confirmpassword} onChange={this.onChange} />
			</Form.Field>
			{errors && errors.confirmpassword && <InlineError text={errors.confirmpassword}/>}
		
			{errors && errors.global && <Message negative>
					<Message.Header>Something went wrong</Message.Header>
					<p>{errors.global}</p>
				</Message>}
				<Button primary>Change Password</Button>
			</Form>
			

		)
	}
}

ChangePasswordForm.propTypes={
	submit: PropTypes.func.isRequired
};

export default ChangePasswordForm;
