import { call, put, takeLatest } from 'redux-saga/effects'
import { types as clienteTypes} from '../clienti/cliente'
import {types as tabelleTypes} from '../tabelle/tabelle'
import { types as apiTypes} from '../../apiHelper'
import api from "../../api";



function* getClienteFlow (action) {
  try {
    yield put({ type: apiTypes.API_REQUEST})

    const response = yield call(api.cliente.getCliente, action.user,action.codiceCliente)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: clienteTypes.CLIENTE_SET,response:response.cliente[0]})
    yield put({ type: tabelleTypes.TABLISTINI_SET,response:response.tabListini})
    yield put({ type: tabelleTypes.TABPAGAMENTI_SET,response:response.tabPagamenti})
    yield put({ type: tabelleTypes.TABRESE_SET,response:response.tabRese})
    yield put({ type: tabelleTypes.TABSPEDIZIONI_SET,response:response.tabSpedizioni})
    yield put({ type: tabelleTypes.TABTIPOCLIENTI_SET,response:response.tabTipoclienti})
    yield put({ type: tabelleTypes.TABZONE_SET,response:response.tabZone})


    // // tabelle
    // yield call (api.tabelle.getTabPagamenti(action.user,action.codiceCliente))
    // yield call (api.tabelle.getTabTipoCliente(action.user,action.codiceCliente))
    // yield call (api.tabelle.getTabZone(action.user,action.codiceCliente))
    // yield call (api.tabelle.getTabListini(action.user,action.codiceCliente))
    // yield call(api.tabelle.getTabSpedizioni(action.user,action.codiceCliente))
    // yield call (api.tabelle.getTabRese(action.user,action.codiceCliente))



  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}


function* saveClienteFlow (action) {
  try {



    yield put({ type: apiTypes.API_REQUEST})
    const response = yield call(api.cliente.salvaCliente, action.user,action.cliente)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: clienteTypes.CLIENTE_SAVESUCCESS,response})

  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}


function* checkPI (action) {
  try {
    yield put({ type: apiTypes.API_REQUEST})
    const response = yield call(api.cliente.checkPI, action.user, action.codNazione , action.forzaPivaI , action.pivaCEE ,  action.codFiscale ,  action.forzaFiscI)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: clienteTypes.CLIENTE_SAVESUCCESS,response})
  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}

function* sendMail (action) {
  try {
    yield put({ type: apiTypes.API_REQUEST})
    const response = yield call(api.cliente.sendMail, action.user, action.clienteNew, action.clienteOld)
    yield put({ type: apiTypes.API_SUCCESS,response})
    yield put({ type: clienteTypes.CLIENTE_SAVESUCCESS,response})
  } catch (error) {
    try {
      const errors=error.response.data.errors.global
      yield put({ type: apiTypes.API_ERROR,errors})
    } catch (e) {
      const errors=error
      yield put({ type: apiTypes.API_ERROR,errors})
    }
  }
}

function* clienteSaga () {
    yield [
     takeLatest(clienteTypes.CLIENTE_SAVE, saveClienteFlow),
     takeLatest(clienteTypes.CLIENTE_GET, getClienteFlow),
     takeLatest(clienteTypes.CHECK_PI, checkPI),
     takeLatest(clienteTypes.MAIL_SEND, sendMail)
    ]
}


export default clienteSaga
