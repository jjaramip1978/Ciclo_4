import React from 'react';
import Item from './Item';

/*  List.jsx muestra los elementos por medio del props de items determinado en el componente Item.jsx 
por lo que List.jsx solo sirve para hacer el recorrido o el mapeo de cada uno de estos elementos y mostrar las propiedades
de cada registro */

function List(props) {
	return (
		<div className="List">
			{
				props.items.map(item => 
					<Item
						// key={item.habilidad}
						Titulo={item.titulo}
						Email={item.correo}
						Habilidad={item.habilidad}
						Descripcion={item.descripcion}
						Valor={item.valor}
					/>
				)
			}

		</div>
	);
}

export default List;