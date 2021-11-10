import React from 'react';
import Search from './Search';
import './Menu.css';

function Menu(props){
	return(
		<div ClassName="container">
			<div className="subcontainer">

				<div className="d-flex justify-content-center my-3">
					{props.title}
				</div>

				<div ClassName="search">
					<Search onsearch={props.onsearch}/>
				</div>

				<div className="actions">
					<button type="button" className="btn btn-info">
					<i className="bi bi-person-plus-fill btn-lg"></i>
					</button>
				</div>

			</div>
		</div>

		
	);
}

export default Menu;