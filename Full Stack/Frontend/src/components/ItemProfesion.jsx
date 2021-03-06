import React from 'react';
import './styles/Item.css';

function ItemProfesion(props){
	return (
		<div className="item">
			<div className="col">
				<div className="card mb-4 rounded-3 shadow-sm">
					<div className="card-header py-3">
						<h2 className="my-0 fw-normal">{props.Habilidad}</h2>               {/* props.Habilidad que estoy mandando desde el componente ListProfesion.jsx */}
					</div>

					<div className="card-body">
						<h5 className="card.title pricing-card-title">
							<small className="h6 text-muted fw-light d-block">{props.Nombre}</small>  {/* props.Codigo que estoy mandando desde el componente ListProfesion.jsx */}
						</h5>
						<h5 className="card-title pricing-card-title sm">												{/* props.Profesion que estoy mandando desde el componente ListProfesion.jsx */}
							{props.Profesion}
							<small className="h6 test-muted fw-light d-block">
								{props.Ciudad_Residencia}																		{/* props.Ciudad y props.Pais que estoy mandando desde el componente ListProfesion.jsx */}
							</small>
						</h5>
						<h5 className="card-title pricing-card-title">
							{props.Descripcion}                                                     {/* props.Descripcion que estoy mandando desde el componente ListProfesion.jsx */}
							<small className="h6 text-muted fw-light d-block"></small>  {/* props.Experiencia que estoy mandando desde el componente List.jsx */}
						</h5>
						<h5 className="card.title pricing-card-title">
							{props.Email}																															{/* props.Correo que estoy mandando desde el componente ListProfesion.jsx */}
							<small className="h6 text-muted fw-light d-block">{props.Numero_Celular}</small>
						</h5>

						<ul className="list-unstyled mt-3 mb-4">
							<li>Rango:${props.Rango}</li>                                          {/* props.Rango que estoy mandando desde el componente ListProfesion.jsx */}
						</ul>

					</div>
				</div>
			</div>
		</div>

	);
}

export default ItemProfesion;