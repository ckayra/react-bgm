import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Loader, Label } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import {actions as categorieActions} from './categorie'
import './menucatalogo.css'

class MenuCatalogo extends React.Component {

  state={
    styles: {
      top: 0,
      left: 0
    },
    activeItem:"",
    filtrocategorie:""
	}




  componentDidMount() {
      if (!this.props.categorie || this.props.categorie.length===0)     this.props.onGetCategorie(this.props.user)
const pos =this.instance.getBoundingClientRect()

      this.setState({
    styles: {
      top: pos.top-14,
      left: pos.width+40
    }
  })
  }

  getCoordinates= () => {
   const dropMen = this.refs.targetDiv.getDOMNode();
   const specs = dropMen.getBoundingClientRect();
   return specs
 }



 handleItemClick = (e, name ) =>{
   console.log('active: ', name)
   if (this.state.activeItem===name) {
      this.setState({ activeItem: "" })
    }else   {
      this.setState({ activeItem: name ,filtrocategorie:name.substring(0,3)})
    }
}

  render() {
    const primoLivello= this.props.categorie.filter((categoria) => categoria.categoriaWeb.endsWith("000000000"))
    return (
      <div className="" ref={(el) => this.instance = el}>
        <Loader active={this.props.apiRequest.requesting} inverted size='large'/>
        <ul>
      {
         primoLivello.map(categoria =>
           categoria.daEvidenz==='S'?  <Label as='a' color='red' ribbon>{categoria.desCategoria}</Label> : <li key={categoria.categoriaWeb}  onClick={e => this.handleItemClick(e,categoria.categoriaWeb)}  className={this.state.activeItem === categoria.categoriaWeb? 'active' :''} >{categoria.desCategoria}</li>
        )
        }
        </ul>
        <div className="float-menu" style={this.state.styles}>
        <li>

        {
this.props.categorie
.filter((categoria)=>categoria.categoriaWeb.startsWith(this.state.filtrocategorie))
.filter((categoria)=>categoria.categoriaWeb!==this.state.activeItem)
.filter((categoria)=>categoria.categoriaWeb.endsWith("000000"))
.map((cat =>
           <ul>{cat.desCategoria}</ul>
         ))}
          </li>
        </div>
      </div>
    )
  }
}

MenuCatalogo.defaultProps ={
  categorie:[],
}

MenuCatalogo.propTypes = {
  user: PropTypes.shape({
    transactId: PropTypes.string.isRequired,
    user: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    lang: PropTypes.string.isRequired
  }).isRequired,
   onGetCategorie: PropTypes.func.isRequired,
   categorie:PropTypes.arrayOf( PropTypes.shape({
      categoriaWeb: PropTypes.string,
      desCategoria: PropTypes.string,
      daEvidenz: PropTypes.string,
    })),
    apiRequest: PropTypes.shape({
      errors: PropTypes.array,
      requesting: PropTypes.bool,
      successful: PropTypes.bool,
    }).isRequired,
};

function mapStateToProps(state) {
  return {
    user: state.user,
    categorie: state.categorie,
    apiRequest:state.apiRequest,
  };
}

const mapDispatchToProps = (dispatch) => ({
    onGetCategorie: bindActionCreators(categorieActions.getCategorie, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(MenuCatalogo);
