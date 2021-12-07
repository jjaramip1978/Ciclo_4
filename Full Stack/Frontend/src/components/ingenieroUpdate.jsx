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
    // localStorage.setItem('id', JSON.stringify(values));
    const id = localStorage.getItem('id');
    const { name, value } = e.target
    console.log("Valor del ID", id);
    setValues({
      ...values,
      [name]: value
    })
    // console.log("Valor despues: ", values.id);
  }

  const handleDelete = e => {
    e.preventDefault();
    const email = localStorage.getItem('email');
    console.log("Email: ", email);
    const id = localStorage.getItem('id');
    axios.delete(`https://app-backend-2-ingenio.herokuapp.com/api/eliminarProfesional/${id}`)
      .then(res => {
        console.log(res);
        console.log(email);
        axios.delete(`https://app-backend-2-ingenio.herokuapp.com/auth/deleteUser/${email}`).then(res => {
          console.log(res);
        })
          .catch(err => {
            console.log(err);
          })
      })
      .catch(err => {
        console.log(err);
      })
  }

  const handleSubmit3 = e => {
    e.preventDefault();
    const id = localStorage.getItem('id');
    const nombre = values.nombre;
    const ciudad = values.ciudad;
    const celular = values.celular;
    const profesion = values.profesion;
    const habilidad = values.habilidad;
    const descripcion = values.descripcion;
    const valor = values.valor;

    // console.log(values.id);
    axios.put(`https://app-backend-2-ingenio.herokuapp.com/api/actualizarProfesional/${id}`,
      { nombre, ciudad, celular, profesion, habilidad, descripcion, valor })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
    const { name } = e.target
    setValues({
      ...values,
      [name]: ""
    })
  }

  // const actualizar = () => {

  // }

  useEffect(() => {
    // localStorage.setItem('id', "61a6b3ac1608063267be3eaa");
    const id = localStorage.getItem('id');
    // setValues({ id: localStorage.getItem('id') });
    // console.log("Valor id: ", values.id);

    axios.get(`https://app-backend-2-ingenio.herokuapp.com/api/buscarProfesional/${id}`).then(res => {
      console.log(res);
      setValues({
        id: res.data.id,
        emai: res.data.email,
        nombre: res.data.nombre,
        ciudad: res.data.ciudad,
        celular: res.data.celular,
        profesion: res.data.profesion,
        habilidad: res.data.habilidad,
        descripcion: res.data.descripcion,
        valor: res.data.valor
      })
    }).catch(err => {
      console.log(err);
    });
  }, [])

  return (

    <div className='form-content-right2'>
      <form onSubmit={handleSubmit3} noValidate>
        <div className='contenedor'>
          <div className="form-inputs2
        ">
            <h1 className="titulo">Actualizar Perfil</h1>
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
          <button type='delete' className='form-input-btn2' value={values.email} onClick={handleDelete}>
            Borrar perfil
          </button>
        </div>
      </form>
    </div>

  );
};