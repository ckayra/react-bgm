import React from 'react'
import NavBarSubMenu from './navbarsubmenu'


class NavBarItem extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          showSubMenu: false
        }
    }
     onItemClick = (event) => {
              console.log('clicked');
              this.setState({showSubMenu: !this.state.showSubMenu})
    }
    render() {
      if (this.props.item.submenu){
        return(
          <div className='nav-hassubmenu' key={this.props.item.text} >
          <span onClick={this.onItemClick}>{this.props.item.text}</span>
        {this.state.showSubMenu &&   <NavBarSubMenu className="hidden" items={this.props.item.submenu}/>}
          </div>
        )
      }else{
        return(<div key={this.props.item.text}><a  href={this.props.item.url}>{this.props.item.text}</a></div>)
      }
    }
}

export default NavBarItem
