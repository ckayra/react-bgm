import React from 'react'
import imgSettings from '../../images/settings.png'
import MenuCatalogo from './MenuCatalogoComponent'


class LeftMenu extends React.Component {
   state = { activeItem: 'account' }
  handleItemClick = (e, name ) =>{
    if (this.state.activeItem===name) {
       this.setState({ activeItem: "" })
     }else    this.setState({ activeItem: name })
}
  render() {
    const { activeItem } = this.state
    return (
      <div className="main-leftsidebar" >
        <div className="main-leftsidebar-commands">
          <div className="nav-menucataweb" name='catalogo'   onClick={e => this.handleItemClick(e,'catalogo')}>
            <i className="material-icons"  >reorder</i>
          </div>
           <div className="nav-condizioni"><img src={imgSettings} alt='settings' /></div>
        </div>
        <div className="container ">

        {activeItem === 'catalogo' ?  <MenuCatalogo /> : "" }
        </div>
      </div>
    )
  }
}

export default LeftMenu;
