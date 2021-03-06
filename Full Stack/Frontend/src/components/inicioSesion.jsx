//import React from "react";
import "./styles/registro.css";
import axios from "axios";
//import useRegistro from "./useRegistro";
import { useState } from 'react';

axios.defaults.withCredentials = true;

export const InicioSesion = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successful, setSuccessfull] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
    /* console.log(email);
    console.log(password);  */
        setSuccessfull("");
        setErrorEmail("");
        setErrorPassword("");

    //para borrar el contenido del formulario automaticamente y dejar los campos en blanco
    axios.post("https://app-backend-2-ingenio.herokuapp.com/auth/login", { email, password })
      .then(res => {
        console.log(res);
        axios.get(`https://app-backend-2-ingenio.herokuapp.com/api/buscarProfesionalEmail/${email}`).then(res2 => {
          console.log(res2);
          localStorage.setItem('id', res2.data._id);
          localStorage.setItem('email', email);
          console.log(localStorage.getItem('id'));
          window.location.replace('');
        })
      })
      .catch((error) => {
        console.log(error.response.data);
        const {email, password} = error.response.data;
        
        setErrorEmail(email);
        setErrorPassword(password);
      });
    
  };

  return (

    <div className='form-content-right4'>
      <form onSubmit={handleSubmit}>
        <div className='contenedor2'>
          <div className="form-inputs2">
            <div className="col-sm-12 d-flex justify-content-center">
              <p className="text-uppercase"><strong>Iniciar Sesión</strong></p>
            </div>
            <label className="form-labelFirst">Email</label>
            <p className="text-danger">
              <small>{errorEmail}</small>
            </p>
            <input
             // className="form-input"
              type="email"
              className={errorEmail ? "form-control is-invalid" : "form-control"}
              id="floatingInput"
              //name="email"
              placeholder="Ingrese email"
              //Para guardar la información digitada por el usuario
              value={email}
              onChange={(e) => setEmail(e.target.value)}/>
            {/*    {errors.email && <p>{errors.email}</p>} */}
          </div>
          <div className="form-inputs2">
            <label className="form-label">Contraseña</label>
            <p className="text-danger">
              <small>{errorPassword}</small>
            </p>
            <input
              //className="form-input"
              type="password"
              className={ errorPassword ? "form-control is-invalid" : "form-control"}
              //name="password"
              id="floatingPassword"
              placeholder="Ingrese una contraseña"
              //Para guardar la información digitada por el usuario
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>
          
          { errorPassword || errorEmail ? (
            <div className="checkbox mb-3 text-danger fw-bold">
              <small>Error al registrar</small>
            </div>
          ) :null}

          { successful ? (
            <div className="checkbox mb-3 text-success fw-bold">
              <small>Sesion iniciada Id Usuario: {successful}</small>
            </div>
          ): null} 
          
        </div>

        <button className='form-input-btn2' type='submit'>
          Iniciar Sesión
        </button>
            
      </form>
    </div>
          
  );
};

export default InicioSesion;
