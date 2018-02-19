import axios from 'axios'
import {sessionTimeOut} from './actions/auth'


// axios.defaults.baseURL = 'https://api.example.com';
// axios.defaults.timeout.post['Content-Type'] = 'application/x-www-form-urlencoded';
 const ax = axios.create({
  baseURL: 'http://provebgm2.elelco.it/api/',
  timeout: 60000,
  // headers: {'X-Custom-Header': 'foobar'}
})
const init= () => axios.interceptors.response.use( (response)  => 
    // Do something with response data
     response
  ,  (error) => {
  console.log('interceped error' , error)
    return Promise.reject(error);
  });
;
init()

const catchErrors=(err,credentials)=>  {
  console.log("catching errors ")
  if (err.response.data.Message==='An error has occurred.'){
    sessionStorage.removeItem('user');
    sessionTimeOut(credentials);
  }
}

export default {
	user:{
		login:(credentials) =>  ax.post( 'login', credentials).then(res => res.data.user),

		logout:(credentials) => ax.post( 'logout',credentials).then(res => res.data.user),

		changepassword:(credentials, newpassword) => ax.post( 'changepassword', {cred: credentials, newpassword}).then(
			res => res.data.user
		),
		keepalive:(credentials) => ax
    .post( 'keepalive',credentials)
    .catch(() => dispatch => {
      sessionStorage.removeItem('user');
      dispatch(sessionTimeOut(credentials));
    }),
	},
	agenti:{
		getAgenti:(credentials)=>
		ax
			.post( `agenti`,credentials)
			.then(res =>  res.data )
			.catch( err => catchErrors(err,credentials))
	},
	clienti:{
		getClienti:(credentials)=>
		ax
			.post( `clienti`,credentials)
			.then(res =>  res.data )
			.catch( err =>   {if (err.response.data.Message==='An error has occurred.'){
          sessionTimeOut(credentials);
        }}),

      getCliente:(credentials, codiceCliente)=>
        ax
          .post( `cliente?codiceCliente=${codiceCliente}`,credentials)
          .then(res =>  res.data )
          .catch( err =>   {if (err.response.data.Message==='An error has occurred.'){
              sessionTimeOut(credentials);
            }}),
    getDatiContabili:(credentials)=>
		ax
			.post( `daticontabili`,credentials)
			.then(res =>  res.data )
			// .catch(err => console.log(err))
	},



}
