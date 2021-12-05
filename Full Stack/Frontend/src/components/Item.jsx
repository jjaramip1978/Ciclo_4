import React from 'react';
import './styles/Item.css';

function Item(props) {
	return (
		<div className="item">
			<div className="col">
				<div className="card mb-4 rounded-3 shadow-sm">
					<div className="card-header py-3">
						<h5 className="my-0 fw-normal">{props.Habilidad}</h5>
					</div>

					<div className="card-body">
						<h1 className="card.title pricing-card-title">
							<small className="h6 text-muted fw-light d-block">{props.Email}</small>
						</h1>

						<h1 className="card-title pricing-card-title">
							{props.Habilidad}
							<small className="h6 text-muted fw-light d-block"></small>
						</h1>

						<h1 className="card-title pricing-card-title">
							{props.Descripcion}
							<small className="h6 text-muted fw-light d-block"></small>
						</h1>

						<ul className="list-unstyled mt-3 mb-4">
							<li>Valor:${props.Valor}</li>
						</ul>

					</div>
				</div>
			</div>
		</div>

	);
}

export default Item;