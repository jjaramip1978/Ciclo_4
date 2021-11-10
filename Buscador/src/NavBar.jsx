const NavBar = () => {
	return ( <nav className="navbar navbar-light bg-light">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">
      <img src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg" 
			alt="" 
			width="30" 
			height="24" 
			className="d-inline-block align-text-top"/>
      Redux-React
    </a>
		<div className="d-flex">
			<button type="button" class="btn btn-info">
				Info
			</button>
		</div>
  </div>
</nav> );
}
 
export default NavBar;