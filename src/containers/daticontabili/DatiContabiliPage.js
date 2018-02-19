import React  from 'react';
import { connect } from "react-redux";
import PropTypes from 'prop-types';
import api from "../../api";
import {StringToImporto} from '../../components/utils/Importo'

class DatiContabili extends React.Component {
	state={
		loading: true,
		anno:new Date().getFullYear(),
		daticontabili: {
			saldCont:0,
			scaduto:0,
			nrInsol:0,
			valInso:0,
			FatEseAtt:0,
			FatEsePre:0,
			FatEseMe2:0,
			ValOrdini:0,
			ValFido:0,
			SupFido:0,}
		}

		componentDidMount() {
			api.clienti.getDatiContabili(this.props.user).then(daticontabili => {
				if (daticontabili) {
					this.setState({ daticontabili: daticontabili[0], loading: false });
				} else {
					this.setState({ daticontabili, loading: false });
				}
			});
		}

		render() {
			const dc=this.state.daticontabili;

			return (
				<div className='centerv centerh'>
					<div className='divDatiContabili shadow2'>
						<span className='etichetta'>Saldo Contabile</span><span className='valore'>{StringToImporto(dc.saldCont,'-')}</span>
						<span className='etichetta'>Scaduto</span><span className='valore'>{StringToImporto(dc.scaduto,'-')}</span>
						<span className='etichetta'>Nr. Insoluti Aperti</span><span className='valore'>{dc.nrInsol}</span>
							<span className='etichetta col2'>Per Euro</span><span className='valore col3'>{StringToImporto(dc.valInso,'-')}</span>
					<span className='etichetta'>Progres. Fatt. 2018</span><span className='valore'>{StringToImporto(dc.FatEseAtt,'-')}</span>
						<span className='etichetta'>Progres. Fatt. 2017</span><span className='valore'>{StringToImporto(dc.FatEsePre,'-')}</span>
						<span className='etichetta'>Progres. Fatt. 2016</span><span className='valore'>{StringToImporto(dc.FatEseMe2,'-')}</span>
						<span className='etichetta'>Valore Ordini in Corso</span><span className='valore'>{StringToImporto(dc.ValOrdini,'-')}</span>
						<span className='etichetta'>Fido</span><span className='valore'>{StringToImporto(dc.ValFido,'-')}</span>
						<span className='etichetta'>Importo Supero Fido</span><span className='valore'>{StringToImporto(dc.SupFido,'-')}</span>

					</div>
				</div>
			);
		}
	}

	DatiContabili.propTypes = {
		user: PropTypes.shape({
			transactId: PropTypes.string.isRequired,
			user: PropTypes.string.isRequired,
			password: PropTypes.string.isRequired,
			lang: PropTypes.string.isRequired
		}).isRequired,
	};

	function mapStateToProps(state){
		return{
			user: state.user
		}
	}

	export default connect(mapStateToProps)(DatiContabili);
