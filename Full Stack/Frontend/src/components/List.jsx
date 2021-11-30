import React from 'react';
import Item from './Item';

/*  List.jsx muestra los elementos por medio del props de items determinado en el componente Item.jsx 
por lo que List.jsx solo sirve para hacer el recorrido o el mapeo de cada uno de estos elementos y mostrar las propiedades
de cada registro */

function List(props){
	return(
		<div className="List">
			{
				props.items.map(item => /* se pasa el props creado para List.jsx en App.jsx para otro componente Item.jsx
																		de esta manera quien queda representado la informacion es Item.jsx y no List.jsx ya que este ultimo 
																		solo me sirve para hacer un recorrido o le mapeo de cada uno de los elementos.
																		Esta es funcion de mapeo donde se hace referencia al props.items */

																		// 9 Propiedades de los objetos o elementos, servicios registrados
					<Item 
						key={item.id}          /* En la iteración hay elementos, mas de uno que se van a mostar del mismo tipo de componente,
																			se añade key especifica para identificar cada elemento,
																			key={item.id} sirve para mapear cada uno de los elementos individualmente y que tengan su 
																			propio id*/
					  
						Nombre={item.Nombre}
       			Email={item.Correo} 
						Profesion={item.Profesion}
       			Habilidad={item.Habilidad}
						Departamneto={item.Departamento}
       			Descripcion={item.Descripcion}
						Numero_Celular={item.Numero_Celular}
						Ciudad_Residencia={item.Ciudad_Residencia}
       			Rango={item.Rango}
						/>  


				)
			}

		</div>
	);
}

export default List;