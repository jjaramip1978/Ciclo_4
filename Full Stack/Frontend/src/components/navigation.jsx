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
    axios.post('http://localhost:5000/auth/logout')
    localStorage.removeItem('id');
    localStorage.removeItem('userId');
    localStorage.removeItem('email');
    usuario();
    window.location.replace('');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-expand-md navbar-light bg-light">
      <Link className="navbar-brand" to="/">INGENIO</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Buscador
            </Link>
            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link class="dropdown-item" to="/buscadorIngenieros">Buscador Ingenieros</Link>
              <Link class="dropdown-item" to="/buscadorServicios">Buscador Servicios</Link>
            </div>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/inicio-sesion">Iniciar Sesion</Link>
          </li>
          <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/registro" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Registrate
            </Link>
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
