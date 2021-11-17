import React from 'react';
import Item from './Item';

function List(props){
	return(
		<div className="List">
			{
				props.items.map(item =>
					<Item 
						key={item.id}
					  Id={item.id} 
       		  Codigo={item.Codigo} 
						Nombre={item.Nombre}
       			Correo={item.Correo} 
						Profesion={item.Profesion}
       			Habilidad={item.Habilidad}
       			Descripcion={item.Descripcion}
						Pais={item.Pais}
						Ciudad={item.Ciudad}
       			Valor={item.Valor} />  
				)
			}

		</div>
	);
}

export default List;