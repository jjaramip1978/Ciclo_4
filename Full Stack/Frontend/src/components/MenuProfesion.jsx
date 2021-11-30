import React from 'react';
import SearchProfesion from './SearchProfesion';
import './styles/Menu.css';

//Se establece barrita del menú donde esta el buscador y el boton de home

function MenuProfesion(props) {
	return (

		<reactFragment>
			<div ClassName="container-fluid">
				<div className="subcontainer">

					{/* Se llama un props determinado en la capa BuscadorProfesion.jsx,jsx para el componente MenuProfesion.jsx que
 especifica: title= Buscador de Servicios Registrado para colocar el nombre al sitio en este componente MenuProfesion.jsx */}

					<div className="d-flex justify-content-center my-3">
						{props.title}
					</div>
				</div>
			</div>


			{/* Corresponde al componente SearchProfesion.jsx */}

			<div className="container-lg">
				<div className="subcontainer">

					<div ClassName="search">
						<SearchProfesion onsearch={props.onsearch} />                {/* En SearchProfesion se asigna un método, llamado onsearch, el cual mande a llamar
																																	a una funcion que este dentro de BuscadorProfesion.jsx entonces se manda a llamar
																																	la funcion onsearch */}
						<i className="bi bi-search center #adb5bd"></i>
					</div>

				</div>
			</div>

		</reactFragment>


	);

}

export default MenuProfesion;