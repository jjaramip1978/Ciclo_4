
import './registro.css';
import Registro from './Registro';



const Form = () => {
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'> 
          <img className='form-img' src='img/INGENIO.PNG' alt='spaceship' />
        </div>
          <Registro/>
      </div>
    </>
  );
};

export default Form;