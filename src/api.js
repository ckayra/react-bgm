import axios from 'axios'

 let url='http://provebgm2.elelco.it/api/'
export default {

	user:{
		login:(credentials) =>  axios.post(url + 'login', credentials).then(res => res.data.user),

		logout:(credentials) => axios.post(url + 'logout',credentials).then(res => res.data.user),

		changepassword:(credentials, newpassword) => axios.post(url + 'changepassword', {cred: credentials, newpassword}).then(
			res => res.data.user
		),
		keepalive:(credentials) => axios.post(url + 'keepalive',credentials),
	},
	agenti:{
		getAgenti:(credentials)=>
		axios
			.post(url + `agenti`,credentials)
			.then(res =>  res.data )
			.catch(err => console.log(err))
	},
	clienti:{
		getClienti:(credentials)=>
		axios
			.post(url + `clienti`,credentials)
			.then(res =>  res.data )
			.catch(err => console.log(err))
	},
	daticontabili:{
		getClienti:(credentials)=>
		axios
			.post(url + `daticontabili`,credentials)
			.then(res =>  res.data )
			.catch(err => console.log(err))
	},


 /* OFFLINE
 user:{
	 login:(credentials) =>  axios.post('http://provebgm2.elelco.it/api/login', credentials).then(

	 res => offlineUser),
	 logout:(credentials) =>(res => offlineUser),
	 keepalive:(credentials) => (res => offlineUser)
 } */
}
