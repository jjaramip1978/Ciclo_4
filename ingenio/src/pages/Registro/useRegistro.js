import { useState} from 'react';
import Ingeniero from "./ingeniero"


const useForm = (validate) => {
    const [values, setValues] = useState({
      nombre: '',
      email: '',
      ciudad: '',
      celular: '',
      password: '',
      password2: '',
    })
    const[ingeniero, setIngeniero] = useState();
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

    const mostrarIngeniero = () =>{
      setIngeniero(
        <Ingeniero/>
      )
    }

    return {handleChange, values, handleSubmit, errors, mostrarIngeniero};

}

export default useForm;