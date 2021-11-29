import React from "react";
import "./styles/registro.css";
import useRegistro from "./useRegistro";

export const Empleador = () => {
  const { handleChange, handleSubmit2, values } = useRegistro()

  return (
    <div className='form-content-right3'>
      <form onSubmit={handleSubmit2} noValidate>           
        <div className='contenedor'>

          <div className="form-inputs2">
              <h1 className="titulo">Registro Empleador</h1>
            <label className="form-label">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Ingrese email"
              //Para guardar la información digitada por el usuario
              value={values.email}
              onChange={handleChange}
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
              value={values.password}
              onChange={handleChange}
            />
            {/* {errors.password && <p>{errors.password}</p>} */}
          </div>

          <div className="form-inputs2">
            <label className="form-labelFirst">Nombre</label>
            <input
              className="form-input"
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre completo"
              //Para guardar la información digitada por el usuario
              value={values.nombre}
              onChange={handleChange}
            />
            {/* {errors.nombre && <p>{errors.nombre}</p>} */}
          </div>

          <div className="form-inputs2">
            <label className="form-label">Ciudad Residencia</label>
            <input
              className="form-input"
              type="text"
              name="ciudad"
              placeholder="Ingrese su ciudad de residencia"
              //Para guardar la información digitada por el usuario
              value={values.ciudad}
              onChange={handleChange}
            />
            {/* {errors.ciudad && <p>{errors.ciudad}</p>} */}
          </div>

          <div className="form-inputs2">
            <label className="form-label">Número Celular</label>
            <input
              className="form-input"
              type="text"
              name="celular"
              placeholder="Ingrese número de teléfono"
              //Para guardar la información digitada por el usuario
              value={values.celular}
              onChange={handleChange}
            />
            {/* {errors.celular && <p>{errors.celular}</p>} */}
          </div>

{/*           <div className="form-inputs2">
            <label className="form-label">Confirma contraseña</label>
            <input
              className="form-input"
              type="password"
              name="password2"
              placeholder="Confirma tu contraseña"
              //Para guardar la información digitada por el usuario
              value={values.password2}
              onChange={handleChange}
            />
            {/* {errors.password2 && <p>{errors.password2}</p>} 
          </div> */}

          <br />

          <div className="form-inputs2">
            <p ><strong>Para comenzar a crear tu red de trabajo, registra los siguientes datos :</strong></p>

          </div>

          <div className="form-inputs2">
            <label className="form-label">Empresa</label>
            <input
              className="form-input"
              type="text"
              name="empresa"
              placeholder="Ingrese nombre de la empresa a la que pertenece"
              //Para guardar la información digitada por el usuario
              value={values.empresa}
              onChange={handleChange}
            />
            {/* {errors.nombre && <p>{errors.nombre}</p>} */}
          </div>

          <button className='form-input-btn2' type='submit'>
            Registrate
          </button>
          
        </div>
      </form>
    </div>
  );
};

export default Empleador;
