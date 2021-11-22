
import React from 'react';

class Search extends React.Component { //Componente declarado como una clase que le dice a React que esto es un componente...
																			

	onChangeEvent = e =>{
			const query = e.target.value.toString().toLowerCase();  /*...para definir onChangeEvent en función de flecha, el cual
																																	se valida por medio de un query e.target.value, que lo transforma
																																	a string y luego lo convierte a minusculas para mandar a llamar
																																	al props padre que es this.props.onsearch con el mismo query que 
																																	se estableció para que cuando the search viaje a Menu.jsx se ejecute 
																																	el evento onsearch el cual va a hacer referencia al siguiente evento
																																	del componente padre onsearch en App.jsx ubicado en la className Menu*/
			this.props.onsearch(query);
	}

	render(){														//Función que se encarga de presentar visualemente el componente, difiere a los componentes declardos
																			//como funciones.

    return(

			// Se añade input para estructua del Search
			
			<input type="text" onChange={this.onChangeEvent} />  /*Se añade al input onChange y se manda a llamar una funcion 
																														 onChangeEvent*/
			
		


			
		);

	}

}

export default Search;