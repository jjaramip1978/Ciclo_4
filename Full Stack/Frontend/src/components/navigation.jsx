import { Link, NavLink } from 'react-router-dom';
// import "bootstrap/dist/css/bootstrap.css";
// import "bootstrap/dist/js/bootstrap.bundle.js";
// import "bootstrap-icons/font/bootstrap-icons.css";

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
      <Link class="navbar-brand" to="/">INGENIO</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Buscador
            </NavLink>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink class="dropdown-item" to="/buscador">Buscador de Ingenieros</NavLink>
              <NavLink class="dropdown-item" to="#">Buscador de Servicios</NavLink>
            </div>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="#">Iniciar Sesion</NavLink>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Registrate
            </NavLink>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink class="dropdown-item" to="/registro">Ingenieros</NavLink>
              <NavLink class="dropdown-item" to="/registro">Empresa</NavLink>
            </div>
          </li>
          <li class="nav-item dropdown">
            <NavLink class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Dropdown
            </NavLink>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <NavLink class="dropdown-item" to="#">Action</NavLink>
              <NavLink class="dropdown-item" to="#">Another action</NavLink>
              <div class="dropdown-divider"></div>
              <NavLink class="dropdown-item" to="#">Something else here</NavLink>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}
