import React from "react";
import "./styles/registro.css";
//import useRegistro from "./useRegistro";
import { useState} from 'react';

export const InicioSesion = () => {
    const [email, setEmail] = useState(""); 
    const [contraseña, setConstraseña] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        //para borrar el contenido del formulario automaticamente y dejar los campos en blanco
        setEmail("");
        setConstraseña("");
    }

  return (
    
    <div className='form-content-right4'>
      <form onSubmit={handleSubmit} noValidate>
        <div className='contenedor'>
        <div className="form-inputs2">
            <div class="col-sm-12 d-flex justify-content-center">
            <p class="text-uppercase"><strong>Iniciar Sesión</strong></p>
            </div>
          <label className="form-labelFirst">Email</label>
          <input
            className="form-input"
            type="email"
            name="email"
            placeholder="Ingrese email"
            //Para guardar la información digitada por el usuario
            value={email}
            onChange={(e) => {
                setEmail(e.target.value);
            }}
          />
          {/*    {errors.email && <p>{errors.email}</p>} */}
        </div>
        <div className="form-inputs2">
          <label className="form-label">Contraseña</label>
          <input
            className="form-input"
            type="password"
            name="password"
            placeholder="Ingrese una contraseña"
            //Para guardar la información digitada por el usuario
            value={contraseña}
            onChange={(e) => {
                setConstraseña(e.target.value);
            }}
          />
          {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
          </div>

          <button className='form-input-btn2' type='submit'>
                        Iniciar Sesión
        </button>

      </form>
    </div>
  
  );
};

export default InicioSesion;
