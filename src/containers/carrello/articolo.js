import React from 'react'
import PropTypes from 'prop-types'
import {Image,Label,Input} from 'semantic-ui-react'

const Articolo= ({item}) =>{
  const getDispColor=(statDisp)=>{
      switch (statDisp) {
        case '0': return 'red'
        case '1': return 'orange'
        case '2': return 'green'
        case '4': return 'blue'

        default:
          return ''
      }
  }


return (
  <div className='articolo'>
    <div className='immagine'>
      <Image src={`./assets/immagini_prodotti/small/${item.barcode}.jpg`} size='small' />
      {item.nrPos}
    </div>

    <div className='codice'>
      <Input size='mini' value={item.barcode}  style={{maxWidth: '130px',padding:'3px'}}/>
      <Input size='mini' value={item.qtaRettif} style={{maxWidth: '80px',textAlign:'right',padding:'3px'}}/>
      <Label circular color={ getDispColor(item.statDisp) } empty />
    </div>

    <div className='descrizione'>
      <span className='descrizione'>{item.descrTitolo} </span>
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
        <span className='valore'>{item.ScoAppli==='0,00'? '' : item.ScoAppli}</span>
      </div>
      <div className='pzonetto'>
        <span className='label'>P.zo netto</span><br/>
        <span className='valore'>{item.pzoNetto}</span>
      </div>
    </div>

    <div className='sconticonfezione'>
      <div><span className='lblconfezione label'>Confezione</span><span className='lblqta label'>Q.tà</span><span className='lblqta label'>Sconto</span></div>
     {item.qtaSuperMin!=='' && <div><span className='lblconfezione'>Superminimo</span><span className='lblqta valore'>{item.qtaSuperMin}</span><span className='lblqta valore'>{item.ScoSuperMin}</span></div>}
     {item.qtaMezzaConf!=='' && <div><span className='lblconfezione'>Conf. Minima</span><span className='lblqta valore'>{item.qtaMezzaConf}</span><span className='lblqta valore'>{item.ScoMezzaConf}</span></div>}
     {item.qtaInner!=='' && <div><span className='lblconfezione'>Inner</span><span className='lblqta valore'>{item.qtaInner}</span><span className='lblqta valore'>{item.ScoInner}</span></div>}
     {item.qtaMaster!=='' && <div><span className='lblconfezione'>Master</span><span className='lblqta valore'>{item.qtaMaster}</span><span className='lblqta valore'>{item.ScoMaster}</span></div>}
     {item.qtaOltreMaster!=='' && <div><span className='lblconfezione'>Oltre</span><span className='lblqta valore'>{item.qtaOltreMaster}</span><span  className='lblqta valore'/></div>}
    </div>

    <div className='speciali'>speciali
    </div>

   </div>
)
  // return(
  //   <Item>
  //     <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />
  //
  //     <Item.Content>
  //       <Item.Header>
  //         {item.nrPos}
  //         <Input size='mini' value={item.barcode}  style={{maxWidth: '130px',padding:'3px'}}/>
  //         <Input size='mini' value={item.qtaRettif} style={{maxWidth: '80px',textAlign:'right',padding:'3px'}}/>
  //          <Label circular color={ getDispColor(item.statDisp) } empty />
  //       </Item.Header>
  //       <Item.Meta>{item.descrTitolo}</Item.Meta>
  //       <Item.Description>
  //       aaaaa
  //       </Item.Description>
  //       <Item.Extra>Additional Details</Item.Extra>
  //     </Item.Content>
  //   </Item>
  //
  // )
}

Articolo.propTypes={
  item: PropTypes.shape({
    barcode:PropTypes.string
  }).isRequired
}

export default Articolo
