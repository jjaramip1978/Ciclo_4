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
       			Correo={item.Correo} 
       			Habilidad={item.Habilidad}
       			Descripcion={item.Descripcion} 
       			Valor={item.Valor} />
				)
			}

		</div>
	);
}

export default List;