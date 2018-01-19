import React from 'react';
import imgSettings from './images/settings.png' 
import imgLogoBgm from './images/logoBGM-New.png' 


const App= () => 

<div className="wrapper">
	<div className="main-head">
		<div className="nav-burgermenu">MENU</div>
		
		
		<div className="nav-logo"><img src={imgLogoBgm} /></div>
		<div className="nav-agente"><i className="material-icons">supervisor_account</i>GI.RA RAPPRESENTANZE SRL</div>
		<div className="nav-cliente"><i className="material-icons">person</i>GLOBE STORE DI ROCCA ANNA E F.LLI SNC (FANTASA WD)</div>
		<div className="nav-carrello"><i className="material-icons">shopping_cart</i>2 Articoli € 123,45</div>
		<div className="nav-user"><i className="material-icons">account_circle</i></div>
		<div className="nav-menu">
 			<div>Carrelli aperti</div>
		    <div>Ordini</div>
		    <div>Cataloghi</div>
		    <div>Agenti</div>
		    <div>Clienti</div>
		    <div>Back office</div>
		    <div>Nuovo cliente</div>
		    <div>Visualizza</div>
		    <div>Carrello</div>
		</div>
		
	</div>
	<div className="main-leftsidebar" >
	<div className="main-leftsidebar-commands">
		<div className="nav-menucataweb">
			<i className="material-icons">reorder</i>
		</div>
		<div className="nav-condizioni"><img src={imgSettings} /></div>
		</div>
		<div>
		<div className="nav-ricerca"><input type="search" placeholder="Search"/></div>
<ul>
<li>Menu 1</li>
<li>Menu 1</li>
<li>Menu 1</li>
</ul>
		</div>
	</div>
	<div className="main-content">CONTENT</div>
	<div className="main-footer">FOOTER</div>
</div>

export default App;