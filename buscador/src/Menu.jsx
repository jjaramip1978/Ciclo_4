import React from 'react';
import Search from './Search';
import './Menu.css';


function Menu(props){
	return(

		<reactFragment>
		<div ClassName="container-fluid">
			<div className="subcontainer">

				<div className="d-flex justify-content-center my-3">
					{props.title}
				</div>
			</div>
		</div>
		
		<div className="container-lg">
				<div className="subcontainer">

					<div ClassName="search">
						<Search onsearch={props.onsearch} />
						<i className="bi bi-search center #adb5bd"></i>
					</div>

					<div className="actions">
						<button type="button" className="btn btn-primary">
							<i className="bi bi-person-plus-fill btn-lg"></i>
							Añadir servicio
						</button>
					</div>
				</div>
			</div>

			</reactFragment>

		
	);

}

export default Menu;