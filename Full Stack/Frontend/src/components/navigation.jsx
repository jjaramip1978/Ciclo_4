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
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/Buscador">Buscador de Servicios</Link>
              <Link class="dropdown-item" to="/BuscadorProfesionCopy">Buscador de Ingenieros</Link>
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
          <li class="nav-item dropdown">
            <Link class="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              {email.email}
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/ingenieroUpdate">Editar Perfil</Link>
              <div class="dropdown-divider"></div>
              <Link class="dropdown-item" to="#" onClick={handleLogout}>Cerrar Sesion</Link>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  )
}