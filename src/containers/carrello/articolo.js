import React from 'react'
import PropTypes from 'prop-types'
import {Image,Label,Input,Icon} from 'semantic-ui-react'
import {senzaDecimali} from '../../components/utils/Importo'
import FormatDate from '../../components/utils/FormatDate'


const Articolo= ({item,pos,tipoUtente}) =>{
  const getDispColor=(statDisp)=>{
      switch (statDisp) {
        case '0': return 'red'
        case '1': return 'orange'
        case '2': return 'green'
        case '3': return 'grey'
        case '4': return 'blue'

        default:
          return ''
      }
  }

const setSconto=(val)=> val==='0,00' ? '' : `${senzaDecimali(val)}%`
const setQta=(val)=> val==='0,00' ? '' : senzaDecimali(val)
// #TODO user.tipoprezzi: 1 con prezzi, 2 senza prezzi, 3 suggeriti

return (
  <div className='articolo shadow2'>
    <div className='immagine'>
      <Image src={`./assets/immagini_prodotti/small/${item.barcode}.jpg`} size='small' />

    </div>

    <div className='codice'>
      {pos}
      <Input size='mini' value={item.barcode}  style={{maxWidth: '130px',padding:'3px'}}/>
      <Input size='mini' className='qta' value={setQta(item.qtaRettif)} style={{maxWidth: '60px',textAlign:'right',padding:'3px'}}/>
      <div style={{position:'relative',display:'inline'}}>
      <Label circular color={getDispColor(item.statDisp)}  size='small'>{item.statDisp==='3' && '? '}{item.quickService==='S' && 'QS'}</Label>
      {tipoUtente==='M'  && <Label color='red' floating size='mini'>{setQta(item.qtaDispEff)}</Label>}
      </div>
    </div>



    <div className='descrizione'>
      <span className='descrizione'>{item.descrTitolo} </span>
      {item.sndaConf!=='' && <span className='descrizione' style={{color:'#DA7C0C'}}>{item.sndaConf} </span>}
      {item.dtOrdine1!=="" && <span className='descrizione bold'>{`Prossimo arrivo ${FormatDate(item.dtOrdine1)}  ${setQta(item.qtaOrdine1)} pezzi` }</span>}
      {item.dtOrdine2!=="" && <span className='descrizione bold'>{`Prossimo arrivo ${FormatDate(item.dtOrdine2)}  ${setQta(item.qtaOrdine2)} pezzi`} </span>}


    </div>

    <div className='messaggi'>msg
    </div>

    <div className='prezzi'>
      <div className='pzolordo'>
        <span className='label'>Prezzo</span><br/>
        <span className='valore'>{item.prezzo}</span>
      </div>
      <div className='sconto'>
        <span className='label'>Sconto</span><br/>
        <span className='valore'>{setSconto(item.ScoAppli)}</span>
      </div>
      <div className='pzonetto'>
        <span className='label'>P.zo netto</span><br/>
        <span className='valore'>{item.pzoNetto}</span>
      </div>
    </div>

    <div className='sconticonfezione'>
      <div><span className='lblconfezione label'>Confezione</span><span className='lblqta label'>Q.tà</span><span className='lblqta label'>Sconto</span></div>
     {item.qtaSuperMin!=='' && <div><span className='lblconfezione'>Superminimo</span><span className='lblqta valore'>{item.qtaSuperMin}</span><span className='lblqta valore'>{setSconto(item.ScoSuperMin)}</span></div>}
     {item.qtaMezzaConf!=='' && <div><span className='lblconfezione'>Conf. Minima</span><span className='lblqta valore'>{item.qtaMezzaConf}</span><span className='lblqta valore'>{setSconto(item.ScoMezzaConf)}</span></div>}
     {item.qtaInner!=='' && <div><span className='lblconfezione'>Inner</span><span className='lblqta valore'>{item.qtaInner}</span><span className='lblqta valore'>{setSconto(item.ScoInner)}</span></div>}
     {item.qtaMaster!=='' && <div><span className='lblconfezione'>Master</span><span className='lblqta valore'>{item.qtaMaster}</span><span className='lblqta valore'>{setSconto(item.ScoMaster)}</span></div>}
     {item.qtaOltreMaster!=='' && <div><span className='lblconfezione'>Oltre</span><span className='lblqta valore'>{item.qtaOltreMaster}</span><span  className='lblqta valore'/></div>}
    </div>

    <div className='speciali'>speciali
    </div>

   </div>
)

}

Articolo.propTypes={
  item: PropTypes.shape({
    barcode:PropTypes.string
  }).isRequired,
  pos: PropTypes.number.isRequired,
  tipoUtente: PropTypes.string.isRequired
}

export default Articolo
