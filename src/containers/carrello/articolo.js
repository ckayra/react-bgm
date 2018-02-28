import React from 'react'
import PropTypes from 'prop-types'
import {Item,Input,Label} from 'semantic-ui-react'

const Articolo= ({item}) =>{
  const getDispColor=(statDisp)=>{
      switch (statDisp) {
        case '0': return 'red'
        case '1': return 'orange'
        case '2': return 'green'
        case '4': return 'blue'
          break;
        default:

      }
  }

  return(
    <Item>
      <Item.Image size='tiny' src='/assets/images/wireframe/image.png' />

      <Item.Content>
        <Item.Header>
          {item.nrPos}
          <Input size='mini' value={item.barcode}  style={{maxWidth: '130px',padding:'3px'}}/>
          <Input size='mini' value={item.qtaRettif} style={{maxWidth: '80px',textAlign:'right',padding:'3px'}}/>
           <Label circular color={ getDispColor(item.statDisp) } empty />
        </Item.Header>
        <Item.Meta>{item.descrTitolo}</Item.Meta>
        <Item.Description>
        aaaaa
        </Item.Description>
        <Item.Extra>Additional Details</Item.Extra>
      </Item.Content>
    </Item>

  )
}

Articolo.propTypes={
  item: PropTypes.shape({
    barcode:PropTypes.string
  }).isRequired
}

export default Articolo
