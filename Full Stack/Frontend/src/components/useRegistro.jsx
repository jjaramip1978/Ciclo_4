import { useState} from 'react';


const useForm = (validate) => {
    const [values, setValues] = useState({
      nombre: '',
      email: '',
      ciudad: '',
      celular: '',
      password: '',
      password2: '',
      habilidad: '',
    })
    const[errors, setErrors] = useState({});

    const handleChange = e =>{
        //este es similar a lo que haciamos para capturar la info del usuario: 
        /*
        value={nombre}
        onChange={(e) => {
        setNombre(e.target.value);
        }} */
        const {name, value} = e.target
        setValues({
            ...values, //spreading props, con ... trae todos los valores contenidos en setValues; setNombre, setEmail etc
            [name]: value //name es la etiqueta que se le da al input como name="email"
        })
    }

    const handleSubmit = e => {
        e.preventDefault();

        setErrors(validate(values));
    }


    return {handleChange, values, handleSubmit, errors};

}

export default useForm;