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
						Departamneto={item.Departamento}
       			Descripcion={item.Descripcion}
						Experiencia={item.Experiencia}
						Pais={item.Pais}
						Ciudad={item.Ciudad}
       			Rango={item.Rango} />  
				)
			}

		</div>
	);
}

export default List;