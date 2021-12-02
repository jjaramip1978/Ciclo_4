
import React from 'react';

class Search extends React.Component {

	onChangeEvent = e => {
		const query = e.target.value.toString().toLowerCase();
		this.props.onsearch(query);
	}

	render() {

		return (

			<div class="form-group">
				<label for="exampleInputEmail1">Buscar Servicio</label>
				<textarea class="form-control" placeholder="Buscar" rows="1"  onChange={this.onChangeEvent}></textarea>
			</div>
		);

	}

}

export default Search;