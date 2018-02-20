import axios from 'axios'

const ax = axios.create({
 baseURL: 'http://provebgm2.elelco.it/api/',
 timeout: 60000,
})

export default {
	user:{
		login:(user,password) =>  ax.post( 'login', {user,password}).then(res => res.data.user),
		logout:(credentials) => ax.post( 'logout',credentials).then(res => res.data.user),
		changepassword:(credentials, newpassword) => ax.post( 'changepassword', {cred: credentials, newpassword}).then(
			res => res.data.user
		),
		// keepalive:(credentials) => ax
    // .post( 'keepalive',credentials)
    // .catch(() => dispatch => {
    //   sessionStorage.removeItem('user');
    //   dispatch(sessionTimeOut(credentials));
    // }),
	},
  	agenti:{
  		getAgenti:(user) =>  ax.post( 'agenti', user).then(res => res.data),
  	},
    clienti:{
      getClienti:(user) =>  ax.post( 'clienti', user).then(res => res.data),
    },
}
