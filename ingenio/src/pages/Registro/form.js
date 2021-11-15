import React, { useState } from 'react';
import './registro.css';
import Registro from './Registro';
import FormSuccess from './formSuccess';


const Form = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <>
      <div className='form-container'>
        <span className='close-btn'>×</span>
        <div className='form-content-left'>
          <img className='form-img' src='img/INGENIO.PNG' alt='spaceship' />
        </div>
        {!isSubmitted ? (
          <Registro submitForm={submitForm} />
        ) : (
          <FormSuccess />
        )}
      </div>
    </>
  );
};

export default Form;