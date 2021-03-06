import { Link } from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';

axios.defaults.withCredentials = true;

export const Navigation = (props) => {

  const [email, setEmail] = useState({ email: localStorage.getItem('email') || 'Usuario' });

  const usuario = () => {
    if (localStorage.getItem('email')) {
      setEmail({ email: localStorage.getItem('email') });
    }
  }

  useEffect(() => {
    usuario();
  }, [localStorage.getItem('email')]);



  const handleLogout = () => {
    axios.post('https://app-backend-2-ingenio.herokuapp.com/auth/logout')
    localStorage.removeItem('id');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    usuario();
    window.location.replace('');
  }

  return (
    <nav class="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
      <Link class="navbar-brand" to="/">INGENIO</Link>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Buscador
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="/buscadorIngenieros">Buscador Ingenieros</Link>
              <Link className="dropdown-item" to="/buscadorServicios">Buscador Servicios</Link>
            </div>
          </li>
          <li class="nav-item">
            <Link class="nav-link" to="/inicio-sesion">Iniciar Sesion</Link>
          </li>
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="/registro" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Registrate
            </Link>
            {/* <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/ingeniero">Ingenieros</Link>
              <Link class="dropdown-item" to="/empleador">Empresa</Link>
            </div> */}
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Usuario
            </Link>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link className="dropdown-item" to="#">Editar Perfil</Link>
              <div className="dropdown-divider"></div>
              <Link className="dropdown-item" to="#">Cerrar Sesion</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}