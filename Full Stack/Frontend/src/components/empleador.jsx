import React from "react";
import "./styles/registro.css";
import useRegistro from "./useRegistro";

export const Empleador = () => {
  const { handleChange, handleSubmit, values} = useRegistro()

  return (
    <div className='form-content-right3'>
      <form onSubmit={handleSubmit} noValidate>
      <div className='contenedor'>  
        <div className="form-inputs2
        ">
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
          {/* {errors.password2 && <p>{errors.password2}</p>} */}
        </div>

        <br />

        <div className="form-inputs2">
        <p ><strong>Para comenzar a crear tu red de trabajo, registra los siguientes datos :</strong></p>

        </div>

        <div className="form-inputs2">
          <label className="form-label">Empresa</label>
          <input
            className="form-input"
            type="text"
            name="nombre"
            placeholder="Ingrese nombre de la empresa a la que pertenece"
            //Para guardar la información digitada por el usuario
            value={values.empresa}
            onChange={handleChange}
          />
          {/* {errors.nombre && <p>{errors.nombre}</p>} */}
        </div>
        
        <div className="form-inputs2">
          <label className="form-label">Campo laboral en el que se desarrolla</label>
          <select className="form-input" aria-label="Default select example">
            <option selected >Selecciona una disciplina</option>
            <option value="1">Ingeniería Agrónoma</option>
            <option value="2">Ingeniería Civil</option>
            <option value="3">Ingeniería de Minas y Metalurgia</option>
            <option value="4">Ingeniería en Sistemas</option>
            <option value="5">Ingeniería Eléctrica</option>
            <option value="6">Ingeniería en Telecomunicaciones</option>
            <option value="7">Ingeniería Electrónica</option>
            <option value="8">Ingeniería en Energía</option>
            <option value="9">Ingeniería en Gestión Ambiental</option>
            <option value="10">Ingeniería en Logística</option>
            <option value="11">Ingeniería Industrial</option>
            <option value="12">Ingeniería Mecatrónica</option>
            <option value="13">Ingeniería Química</option>
        </select>
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
