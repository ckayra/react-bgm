import { USER_LOGGED_IN , USER_LOGGED_OUT,SET_AGENTE, SET_CLIENTE} from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = user => ({
  type: USER_LOGGED_OUT,user
});

export const setAgente = user => ({
  type: SET_AGENTE,user
});
export const setCliente = user => ({
  type: SET_CLIENTE,user
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
		sessionStorage.user.password=newpassword;
		sessionStorage.user.changePwd='N'
	});

	export const keepalive = credentials => dispatch =>
	api.user.keepalive(credentials)


  export const selectAgente = (codiceAgente,desAgente) => dispatch =>
   {
  	sessionStorage.user=JSON.stringify(user);
  	dispatch(setAgente(codiceAgente,desAgente));
  }

  export const selectCliente = user => dispatch =>
   {
    sessionStorage.user=JSON.stringify(user);
    dispatch(setCliente(user));
  }
