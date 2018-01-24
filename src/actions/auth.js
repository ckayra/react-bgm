import { USER_LOGGED_IN , USER_LOGGED_OUT,SET_CODAGENTE, SET_CODCLIENTE,SET_DESAGENTE, SET_DESCLIENTE} from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,user
});

export const setCodAgente = codiceAgente => ({
  type: SET_CODAGENTE,codiceAgente
});
export const setDesAgente = desAgente => ({
  type: SET_DESAGENTE,desAgente
});
export const setCodCliente = codiceCliente => ({
  type: SET_CODCLIENTE,codiceCliente
});
export const setDesCliente = desCliente => ({
  type: SET_DESCLIENTE,desCliente
});



export const login = credentials => dispatch =>
	api.user.login(credentials).then(user => {
	sessionStorage.user=JSON.stringify(user);
	dispatch(userLoggedIn(user));
});


export const logout = credentials => dispatch =>
	 api.user.logout(credentials).then(user =>{
    sessionStorage.removeItem('user');
    dispatch(userLoggedOut(user));
});


export const changepassword = (credentials, newpassword) => dispatch =>
	api.user.changepassword(credentials, newpassword).then(user =>{
     user=JSON.parse(sessionStorage.user);
		user.password=newpassword;
		user.changePwd='N'
    sessionStorage.user=JSON.stringify(user);
	});

	export const keepalive = credentials => dispatch =>
	api.user.keepalive(credentials)


  export const selectAgente = agente => dispatch =>
   {
  	dispatch(setCodAgente(agente.codiceAgente));
    dispatch(setDesAgente(agente.desAgente));
    	const user=JSON.parse(sessionStorage.user);
      user.codiceAgente=agente.codiceAgente;
      user.desAgente=agente.desAgente;
      sessionStorage.user=JSON.stringify(user);
  }

  export const selectCliente = cliente => dispatch =>
   {
    dispatch(setCodCliente(cliente.codiceCliente));
    dispatch(setDesCliente(cliente.desCliente));
    const user=JSON.parse(sessionStorage.user);
    user.codiceCliente=cliente.codiceCliente;
    user.desCliente=cliente.desCliente;
    sessionStorage.user=JSON.stringify(user);
  }
