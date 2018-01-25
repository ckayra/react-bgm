import React from 'react'
import NavBarSubMenu from './navbarsubmenu'


class NavBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showSubMenu: false
        }
    }
     onItemClick = () => {
              console.log('clicked');
              this.setState({showSubMenu: !this.state.showSubMenu})
    }

    link=(item)=><div key={item.text}><a  href={item.url}>{item.text}</a></div>
    submenu=(item)=>(
      <div className='nav-hassubmenu' key={item.text} >
      <span onClick={this.onItemClick}>{item.text}<i className="material-icons">arrow_drop_down</i></span>
      {this.state.showSubMenu &&   <NavBarSubMenu className="hidden" items={item.submenu}/>}
      </div>
    )
    render() {
      if (this.props.item.submenu){
        return(this.submenu(this.props.item))
      }
        return(this.link(this.props.item))
      
    }
}

export default NavBarItem
