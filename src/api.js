import axios from 'axios'

// const ax = axios.create({
//   baseURL: 'http://provebgm2.elelco.it/api/',
//   timeout: 60000,
// })


const ax = axios.create({
  baseURL: 'http://localhost:40049/api/',
  timeout: 60000,
})

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

    // .catch( err =>   {if (err.response.data.Message==='An error has occurred.'){
    //     sessionTimeOut(credentials);
    //   }}),
  },

cliente:{
  salvaCliente:(user, cliente)=>{
      console.log("api user: " ,user)
      ax.post( `salvaCliente`,{user,cliente}).then(res =>  res.data )
  } ,
  getCliente:(user, codCliente)=> ax.post( `cliente?codiceCliente=${codCliente}`,user).then(res =>  res.data ),
  checkPI:(user, codNazione , forzaPivaI , pivaCEE ,  codFiscale ,  forzaFiscI )=> ax.post( `checkPI`,{user,codNazione,forzaPivaI,pivaCEE,codFiscale,forzaFiscI}).then(res =>  res.data ),
  sendMail:(user, clienteNew,clienteOld )=> ax.post( `sendMail`,{user,clienteNew,clienteOld}).then(res =>  res.data ),

},


  catalogo:{
    getCategorie:(user) =>  ax.post( 'categorie', user).then(res => res.data),
  },


  carrelli:{
    getCarrelli:(user) =>  ax.post( 'carrelli', user).then(res => res.data), // {user}  elenco carrelli aperti
    toggleCarrelloSospeso:(user,numCarrello) => ax.post( `togglesospeso?numCarrello=${numCarrello}`, user).then(res => res.data), // ?numCarrello {user}
    getCarrelloCompleto:(user,numCarrello) => ax.post( `getcarrellocompleto?numCarrello=${numCarrello}`, user).then(res => res.data), // ?numcarrello {user}
    // getTotaliCarrello:(parms) => ax.post( `gettotalicarrello`, parms).then(res => res.data), // request {user,totcar:{nrcarrello,fIncasso}}

  },

  tabelle:{
    getTabRese:(user)=>  ax.post( `tabella?codiceTabella=RE`,user).then(res =>  res.data ),
    getTabSpedizioni:(user)=>  ax.post( `tabella?codiceTabella=SP`,user).then(res =>  res.data ),
    getTabZone:(user)=>  ax.post( `tabella?codiceTabella=ZO`,user).then(res =>  res.data ),
    getTabListini:(user)=>  ax.post( `tabella?codiceTabella=LV`,user).then(res =>  res.data ),
    getTabDivisioni:(user)=>  ax.post( `tabella?codiceTabella=DP`,user).then(res =>  res.data ),
    getTabLinee:(user)=>  ax.post( `tabella?codiceTabella=LI`,user).then(res =>  res.data ),
    getTabSottolinee:(user)=>  ax.post( `tabella?codiceTabella=SL`,user).then(res =>  res.data ),
    getTabPagamenti:(user,codiceCliente)=>  ax.post( `TabellaPagamenti?codiceCliente=${codiceCliente}`,user).then(res =>  res.data ),
    getTabTipoCliente:(user,codiceCliente)=>  ax.post( `TabellaTipoCliente?codiceCliente=${codiceCliente}`,user).then(res =>  res.data ),

  }
}
