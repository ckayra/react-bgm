import axios from 'axios'

const ax = axios.create({
  baseURL: 'http://provebgm2.elelco.it/api/',
  timeout: 60000,
})

//
// const ax = axios.create({
//   baseURL: 'http://localhost:40049/api/',
//   timeout: 60000,
// })

export default {
  user:{
    login:(user,password) =>  ax.post( 'login', {user,password}).then(res => res.data.user),
    logout:(credentials) => ax.post( 'logout',credentials).then(res => res.data.user),
    changepassword:(credentials, newpassword) => ax.post( 'changepassword', {cred: credentials, newpassword}).then(
      res => res.data.user
    ),
    keepalive:(credentials) => ax
    .post( 'keepalive',credentials)
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
    getDatiContabili:(user)=>
    ax
    .post( `daticontabili`,user)
    .then(res =>  res.data ),
    getCliente:(user, codiceCliente)=>
    ax
    .post( `cliente?codiceCliente=${codiceCliente}`,user)
    .then(res =>  res.data )
    // .catch( err =>   {if (err.response.data.Message==='An error has occurred.'){
    //     sessionTimeOut(credentials);
    //   }}),
  },



  catalogo:{
    getCategorie:(user) =>  ax.post( 'categorie', user).then(res => res.data),
  },


  carrelli:{
    getCarrelli:(user) =>  ax.post( 'carrelli', user).then(res => res.data),
    toggleCarrelloSospeso:(user,numCarrello) => ax.post( `togglesospeso?numCarrello=${numCarrello}`, user).then(res => res.data),
    getCarrello:(user,numCarrello) => ax.post( `carrello?numCarrello=${numCarrello}`, user).then(res => res.data),
  },
}
