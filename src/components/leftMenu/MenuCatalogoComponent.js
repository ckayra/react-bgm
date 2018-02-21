import React from 'react'
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import {Loader, Label } from 'semantic-ui-react'
import { bindActionCreators } from 'redux'
import {actions as categorieActions} from './categorie'

class MenuCatalogo extends React.Component {

  // state={
	// 	categorie:[]
	// }

  componentDidMount() {
      if (!this.props.categorie || this.props.categorie.length===0)     this.props.onGetCategorie(this.props.user)

  }



  render() {
    const primoLivello= this.props.categorie.filter((categoria) => categoria.categoriaWeb.endsWith("000000000"))

    return (
      <div className="" >
        <Loader active={this.props.apiRequest.requesting} inverted size='large'/>
        <ul>
      {
         primoLivello.map(categoria =>
           categoria.daEvidenz==='S'?  <Label as='a' color='red' ribbon>{categoria.desCategoria}</Label> : <li key={categoria.categoriaWeb}>{categoria.desCategoria}</li>
        )
        }
        </ul>
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
