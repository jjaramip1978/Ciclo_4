import "./styles/registro.css";
import Formulario from './formulario';

export const Form = () => {
  return (
    <>
      <div className='form-container'>
        <div className='form-content-left'> 
          <img className='form-img' src='img/INGENIO.PNG' alt='spaceship' />
        </div>
          <Formulario/>
      </div>
    </>
  );
};

export default Form;