import React from 'react';
import Search from './Search';
import './styles/Menu.css';

//Se establece barrita del menú donde esta el buscador y el boton de home

function Menu(props) {
	return (

		<>
			<div className="container-fluid">
				<div className="subcontainer">
					<div className="d-flex justify-content-center my-3">
						{props.title}
					</div>
				</div>
			</div>

			<div className="container-lg">
				<div className="subcontainer">

					<div className="search">
						<Search onsearch={props.onsearch} /> 
						<i className="bi bi-search center #adb5bd"></i>
					</div>
				</div>
			</div>

		</>
	);
}

export default Menu;