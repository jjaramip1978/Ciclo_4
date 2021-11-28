import React from "react";
import "./styles/registro.css";
import {withRouter} from 'react-router-dom';



export const Form = (props) => {
    const {history} = props;
/*     const { handleChange, handleSubmit, values, errors, mostrarIngeniero } = useRegistro(
        validate
    ); */

    return (
        <div className="form-content-right">            
            <form  className='form' noValidate>
            <h1>
               Únete a nuestra red de trabajo hoy! Crea tu cuenta llenando la siguiente información. <br />
               <br />
               ¿Buscas trabajo o quieres contratar? <br />
                Elige el rol con el que quieres registrarte:
            </h1>

                <button 
                    className='form-input-btn' 
                    onClick={() => history.push('/ingeniero')}
                >
                    Registrate como Ingeniero
{/*                          
                        {(ingeniero) ? (
                            <Redirect to ="ingeniero"/>
                        ): null}  */}
                </button>


                <button className='form-input-btn' type='submit'
                                  onClick={() => history.push('/empleador')}>
                        Registrate como Empleador
                </button>

                    <span className='form-input-login'>

                        Ya tienes una cuenta? Login <a href='/ingeniero'>aquí</a>
                    </span>

            </form>
        </div>);
}

export default withRouter(Form);