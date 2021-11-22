import React from "react";
import "./registro.css"
//import { Helmet } from 'react-helmet';
import useRegistro from './useRegistro'
import validate from './validateInfo';


const Registro = () => {
    const { handleChange, handleSubmit, values, errors, mostrarIngeniero } = useRegistro(
        validate
    );

    return (
        <div className="form-content-right">            
            <form onSubmit={handleSubmit} className='form' noValidate>
            <h1>
               Únete a nuestra red de trabajo hoy! Crea tu cuenta llenando la siguiente información:
            </h1>
                <div className='form-inputs'>
                    <label className='form-label'>Nombre</label>
                    <input
                        className="form-input"
                        type="text"
                        name='nombre'
                        placeholder='Ingrese su nombre completo'
                        //Para guardar la información digitada por el usuario
                        value={values.nombre}
                        onChange={handleChange}
                    />
                    {errors.nombre && <p>{errors.nombre}</p>}
                </div>
                <div className='form-inputs'>
                    <label className="form-label">Email</label>
                    <input
                        className="form-input"
                        type='email'
                        name='email'
                        placeholder='Ingrese email'
                        //Para guardar la información digitada por el usuario
                        value={values.email}
                        onChange={handleChange}
                    />
                    {errors.email && <p>{errors.email}</p>}
                </div>
                <div className='form-inputs'>
                    <label className="form-label">Ciudad Residencia</label>
                    <input
                        className="form-input"
                        type="text"
                        name='ciudad'
                        placeholder='Ingrese su ciudad de residencia'
                        //Para guardar la información digitada por el usuario
                        value={values.ciudad}
                        onChange={handleChange}
                    />
                    {errors.ciudad && <p>{errors.ciudad}</p>}
                </div>
                <div className='form-inputs'>
                    <label className="form-label">Número Celular</label>
                    <input
                        className="form-input"
                        type="text"
                        name='celular'
                        placeholder='Ingrese número de teléfono'
                        //Para guardar la información digitada por el usuario
                        value={values.celular}
                        onChange={handleChange}
                    />
                    {errors.celular && <p>{errors.celular}</p>}
                </div>
                <div className='form-inputs'>
                    <label className="form-label">Contraseña</label>
                    <input
                        className="form-input"
                        type="password"
                        name='password'
                        placeholder='Ingrese una contraseña'
                        //Para guardar la información digitada por el usuario
                        value={values.password}
                        onChange={handleChange}
                    />
                    {errors.password && <p>{errors.password}</p>}
                </div>
                <div className='form-inputs'>
                    <label className="form-label">Confirma contraseña</label>
                    <input
                        className="form-input"
                        type="password"
                        name='password2'
                        placeholder='Confirma tu contraseña'
                        //Para guardar la información digitada por el usuario
                        value={values.password2}
                        onChange={handleChange}
                    />
                    {errors.password2 && <p>{errors.password2}</p>}
                </div>

                <button 
                    className='form-input-btn' 
                    onClick={mostrarIngeniero}
                >
                        Registrate como Ingeniero
                </button>

                <button className='form-input-btn' type='submit'>
                        Registrate como Empleador
                </button>

                <button className='form-input-btn' type='submit'>
                        Sign up
                    </button>
                    <span className='form-input-login'>
                        Ya tienes una cuenta? Login <a href='#'>aquí</a>
                    </span>

            </form>
        </div>);
}

export default Registro;