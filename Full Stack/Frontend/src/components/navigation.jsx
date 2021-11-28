import { Link, NavLink } from 'react-router-dom';

export const Navigation = (props) => {
  return (
    <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
      <Link class="navbar-brand" to="/">INGENIO</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <NavLink class="nav-link" to="/registro">Registrarse <span class="sr-only">(current)</span></NavLink>
          </li>
          <li class="nav-item">
            <NavLink class="nav-link" to="/buscador">Buscador</NavLink>
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
