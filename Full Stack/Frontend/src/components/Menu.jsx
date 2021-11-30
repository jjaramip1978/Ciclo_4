import React from 'react';
import Search from './Search';
import './styles/Menu.css';

//Se establece barrita del menú donde esta el buscador y el boton de home

function Menu(props) {
	return (

		<reactFragment>
			<div ClassName="container-fluid">
				<div className="subcontainer">

					{/* Se llama un props determinado en la capa App,jsx para el componente Menu.jsx que
 especifica: title= Buscador de Servicios Registrado para colocar el nombre al sitio en este componente Menu.jsx */}

					<div className="d-flex justify-content-center my-3">
						{props.title}
					</div>
				</div>
			</div>


			{/* Corresponde al componente Search.jsx */}

			<div className="container-lg">
				<div className="subcontainer">

					<div ClassName="search">
						<Search onsearch={props.onsearch} />                {/* En search se asigna un método, llamado onsearch, el cual mande a llamar
																																	a una funcion que este dentro de app.jsx entonces se manda a llamar
																																	la funcion onsearch */}
						<i className="bi bi-search center #adb5bd"></i>
					</div>
				</div>
			</div>

		</reactFragment>


	);

}

export default Menu;