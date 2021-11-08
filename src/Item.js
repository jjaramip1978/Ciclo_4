import React from 'react';
import './Item.css';

function Item(props){
	return(
		<div className="item">
                <div className="Id">{props.Id}</div>
                <div className="Codigo">{props.Codigo}</div>
                <div className="Correo">{props.Correo}</div>
								<div className="Habilidad">{props.Habilidad}</div>
								<div className="Descripcion">{props.Descripcion}</div>
                <div className="Valor">{props.Valor}</div>
               
               
							  <div className="actions">
                    <button>Eliminar</button>
										<button>Editar</button>
                </div>
     </div>
      
	);
}

export default Item;