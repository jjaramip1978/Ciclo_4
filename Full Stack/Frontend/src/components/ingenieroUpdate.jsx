import React from "react";
import { useState } from 'react';
import axios from "axios";
import "./styles/registro.css";
// import useRegistro from "./useRegistro";
import { useEffect } from "react";



axios.defaults.withCredentials = true;

export const IngenieroUpdate = () => {

  const [values, setValues] = useState({
    id: '',
    nombre: '',
    email: '',
    ciudad: '',
    celular: '',
    profesion: '',
    habilidad: '',
    descripcion: '',
    password: '',
    valor: '',
    empresa: ''
  })

  const handleChange = e => {
    //este es similar a lo que haciamos para capturar la info del usuario: 
    /*
    value={nombre}
    onChange={(e) => {
    setNombre(e.target.value);
    }} */
    const { name, value } = e.target
    setValues({
      ...values, //spreading props, con ... trae todos los valores contenidos en setValues; setNombre, setEmail etc
      [name]: value //name es la etiqueta que se le da al input como name="email"
    })
  }

  const handleDelete = e => {
    e.preventDefault();
    axios.delete(`http://localhost:5000/api/eliminarProfesional/${values.id}`)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  const handleSubmit3 = e => {
    e.preventDefault();
    const id = values.id;
    const nombre = values.nombre;
    const ciudad = values.ciudad;
    const celular = values.celular;
    const profesion = values.profesion;
    const habilidad = values.habilidad;
    const descripcion = values.descripcion;
    const valor = values.valor;

    console.log(nombre, ciudad, celular, profesion, habilidad, descripcion, valor);
    axios.put(`http://localhost:5000/api/actualizarProfesional/${id}`,
      { nombre, ciudad, celular, profesion, habilidad, descripcion, valor })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    const { name } = e.target
    setValues({
      ...values, //spreading props, con ... trae todos los valores contenidos en setValues; setNombre, setEmail etc
      [name]: "" //name es la etiqueta que se le da al input como name="email"
    })
    // setErrors(validate(values));
  }

  useEffect(() => {
    actualizar();
  }, [])

  const actualizar = () => {
    const id = "61a5a2bf6834401621695724";
    axios.get(`http://localhost:5000/api/buscarProfesional/${id}`).then(res => {
      console.log(values);
      values.id = id;
      values.email = res.data.email;
      values.nombre = res.data.nombre;
      values.ciudad = res.data.ciudad;
      values.celular = res.data.celular;
      values.profesion = res.data.profesion;
      values.habilidad = res.data.habilidad;
      values.descripcion = res.data.descripcion;
      values.valor = res.data.valor;
    }).catch(err => {
      console.log(err);
    });
  }


  return (

    <div className='form-content-right2'>
      <form onSubmit={handleSubmit3} noValidate>
        <div className='contenedor'>
          <div className="form-inputs2
        ">
            <h1 className="titulo">Actualizar Perfil</h1>

            <button className='form-input-btn2' type="cancel" onClick={actualizar}>
              Cargar
            </button>
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
            Actualizar
          </button>
          <button type='delete' className='form-input-btn2' onClick={handleDelete}>
            Borrar perfil
          </button>
        </div>
      </form>
    </div>

  );
};

export default [IngenieroUpdate];
