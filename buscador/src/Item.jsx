import React from 'react';
import './Item.css';
import './Menu';

function Item (props) {                   /* Estructura para renderizar elementos en la clase Item.jsx que es contenedora de todos */


	return(
	<div className="item">
			<div className="col">
				<div className="card mb-4 rounded-3 shadow-sm">
					<div className="card-header py-3"> 
						<h5 className="my-0 fw-normal">{props.Habilidad}</h5>               {/* props.Habilidad que estoy mandando desde el componente List.jsx */}
					</div>
   
					<div className="card-body">
						<h7 className="card.title pricing-card-title">
							{props.Id}
							<small className="h6 text-muted fw-light d-block">{props.Codigo}</small>  {/* props.Codigo que estoy mandando desde el componente List.jsx */}
						</h7>
						<h7 className="card-title pricing-card-title">												{/* props.Profesion que estoy mandando desde el componente List.jsx */}
							{props.Profesion} 																	
							<small className="h6 test-muted fw-light d-block">
								{props.Ciudad} {props.Pais}																			{/* props.Ciudad y props.Pais que estoy mandando desde el componente List.jsx */}
							</small>
						</h7>
						<h7 className="card-title pricing-card-title">
							{props.Descripcion}                                                     {/* props.Descripcion que estoy mandando desde el componente List.jsx */}
							<small className="h6 text-muted fw-light d-block">Experiencia: {props.Experiencia}</small>  {/* props.Experiencia que estoy mandando desde el componente List.jsx */}
						</h7>
						<h7 className="card.title pricing-card-title">
							{props.Correo}																															{/* props.Correo que estoy mandando desde el componente List.jsx */}
							<small className="h6 text-muted fw-light d-block">{props.Nombre}</small>
						</h7>

						<ul className="list-unstyled mt-3 mb-4">
							<li>Rango:${props.Rango}</li>                                          {/* props.Rango que estoy mandando desde el componente List.jsx */}
						</ul>

		 				<div className="actions">
		 					<button 
							 type="button" 
							 className="btn btn-danger btn-sm"
							 >
							<i className="bi bi-trash-fill"></i>
		 						Borrar
							</button>
	
							<button type="button" className="btn btn-success btn-sm"
							>
		 						Editar
							<i className="bi bi-pencil-fill"></i>
							</button>
						</div>

					</div>
				</div>
			</div>
	</div>
	 
	)
}

export default Item;