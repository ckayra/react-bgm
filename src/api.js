import axios from 'axios'

export default {

	user:{
		login:(credentials) =>  axios.post('http://provebgm2.elelco.it/api/login', credentials).then(res => res.data.user),

		logout:(credentials) => axios.post('http://provebgm2.elelco.it/api/logout',credentials).then(res => res.data.user),

		changepassword:(credentials, newpassword) => axios.post('http://provebgm2.elelco.it/api/changepassword', {cred: credentials, newpassword}).then(
			res => res.data.user
		),
		keepalive:(credentials) => axios.post('http://localhost:40049/api/keepalive',credentials),
	},
	agenti:{
		getAgenti:(credentials)=> axios.post('http://provebgm2.elelco.it/api/agenti', credentials).then(res => res.data.agenti),
	}


 /* OFFLINE
 user:{
	 login:(credentials) =>  axios.post('http://provebgm2.elelco.it/api/login', credentials).then(

	 res => offlineUser),
	 logout:(credentials) =>(res => offlineUser),
	 keepalive:(credentials) => (res => offlineUser)
 } */
}
