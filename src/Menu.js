import React from 'react';
import Search from './Search';
import './Menu.css';

function Menu(props){
	return(
		<div ClassName="container">
			<div className="subcontainer">

				<div className="logo">
					{props.title}
				</div>

				<div ClassName="search">
					<Search onsearch={this.props.onsearch}/>
				</div>

				<div ClassName="actions">
					<button className="button btn-blue">+ Añadir nuevo registro de servicio</button>
				</div>

			</div>
		</div>

		
	);
}

export default Menu;
