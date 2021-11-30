import React from "react";
import "./styles/registro.css";
import useRegistro from "./useRegistro";

export const Ingeniero = () => {
  const { handleChange, handleSubmit, values } = useRegistro()

  return (

    <div className='form-content-right2'>
      <form onSubmit={handleSubmit} noValidate>
        <div className='contenedor'>
          <div className="form-inputs2
        ">
            <h1 className="titulo">Registro Ingeniero</h1>



            <label className="form-labelFirst">Email</label>
            <input
              className="form-input"
              type="email"
              name="email"
              placeholder="Ingrese email"
              //Para guardar la información digitada por el usuario
              value={values.email}
              onChange={handleChange}
            />
            {/* {errors.nombre && <p>{errors.nombre}</p>} */}
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
            <label className="form-label">Nombre</label>
            <input
              className="form-input"
              type="text"
              name="nombre"
              placeholder="Ingrese su nombre completo"
              //Para guardar la información digitada por el usuario
              value={values.nombre}
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
          {/* <div className="form-inputs2">
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
            {errors.password2 && <p>{errors.password2}</p>}
          </div> */}
          <div className="form-inputs2">
            <label className="form-label">Profesión</label>
            <select
              value={values.profesion} onChange={handleChange} name="profesion">
              {/* <option selected >Ingenieria</option> */}
              <option >Ingeniería Agrónoma</option>
              <option >Ingeniería Civil</option>
              <option >Ingeniería de Minas y Metalurgia</option>
              <option >Ingeniería en Sistemas</option>
              <option >Ingeniería Eléctrica</option>
              <option >Ingeniería en Telecomunicaciones</option>
              <option >Ingeniería Electrónica</option>
              <option >Ingeniería en Energía</option>
              <option >Ingeniería en Gestión Ambiental</option>
              <option >Ingeniería en Logística</option>
              <option >Ingeniería Industrial</option>
              <option >Ingeniería Mecatrónica</option>
              <option >Ingeniería Química</option>
            </select>
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>
          <br />
          <div className="form-inputs2">
            <p > <strong> Para comenzar a darte a conocer y formar tu hoja de vida, registra tus habilidades y servicios que estas dispuesto a ofertar . . . Consigue el trabajo deseado!  </strong> </p>
          </div>

          <div className="form-inputs2">
            <label className="form-label">Habilidad</label>
            <input
              className="form-input"
              type="text"
              name="habilidad"
              placeholder="Ingrese habilidad que lo identifica"
              //Para guardar la información digitada por el usuario
              value={values.habilidad}
              onChange={handleChange}
            />
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>

          <div className="form-inputs2">
            <label className="form-label">Descripción</label>
            <textarea
              class="form-inputD"
              id="exampleFormControlTextarea1"
              rows="3"
              name="descripcion"
              placeholder="Describa de forma breve en que se especializa"
              value={values.descripcion}
              onChange={handleChange}
            ></textarea>
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>

          <div className="form-inputs2">
            <label className="form-label">Rango de valor por tus servicios</label>
            <select class="form-input" aria-label="Default select example" name="valor"
              value={values.valor} onChange={handleChange}
            >
              <option selected >Elige un rango</option>
              <option >$2.000.000 - $3.000.000</option>
              <option >$3.000.000 - $4.000.000</option>
              <option >$4.000.000- $5.000.000</option>
              <option >$5.000.000 - $6.000.000</option>
              <option >$6.000.000 o más</option>
            </select>
            {/* {errors.password2 && <p>{errors.password2}</p>} */}
          </div>

          <button className='form-input-btn2' type='submit'>
            Registrate
          </button>
        </div>
      </form>
    </div>

  );
};

export default Ingeniero;
