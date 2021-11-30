import React from 'react';

class SearchProfesion extends React.Component { //Componente declarado como una clase que le dice a React que esto es un componente...


	onChangeEvent = e => {
		/*...para definir onChangeEvent en función de flecha, el cual
			se valida por medio de un query e.target.value, que lo transforma
			a string y luego lo convierte a minusculas para mandar a llamar
			al props padre que es this.props.onsearch con el mismo query que 
			se estableció para que cuando the search viaje a MenuProfesion.jsx se ejecute 
			el evento onsearch el cual va a hacer referencia al siguiente evento
			del componente padre onsearch en BuscadorProfesion.jsx ubicado en la className MenuProfesion*/
		const query = e.target.value.toString().toLowerCase();
		this.props.onsearch(query);
	}

	render() {//Función que se encarga de presentar visualemente el componente, difiere a los componentes declarados
		//como funciones.
				
		return (

			// Se añade input para estructua del Search

			/*Se añade al input onChange y se manda a llamar una funcion 
			onChangeEvent*/

			<div class="form-group flex-nowrap">
				{/* <input type="text" onChange={this.onChangeEvent} /> */}
				<label 
				for="exampleInputEmail1">Buscar Ingeniero
				</label>
				<textarea 
				type="text"
				class="form-control" 
				placeholder="Buscar" 
				rows="1"  
				onChange={this.onChangeEvent}></textarea>
			</div>
			

		);

	}

}

export default SearchProfesion;