import { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const useForm = (validate) => {
    const [values, setValues] = useState({
        nombre: '',
        email: '',
        ciudad: '',
        celular: '',
        profesion: '',
        habilidad: '',
        descripcion: 'Descripcion',
        password: '',
        valor: '',
    })
    const [errors, setErrors] = useState({})
    const [isSubmitting, setIsSubmitting] = useState(false)

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

    const handleSubmit = e => {
        e.preventDefault();
        //para borrar el contenido del formulario automaticamente y dejar los campos en blanco
        const email = values.email;
        const password = values.password;
        const nombre = values.nombre;
        const ciudad = values.ciudad;
        const celular = values.celular;
        const profesion = values.profesion;
        const habilidad = values.habilidad;
        const descripcion = values.descripcion;
        const valor = values.valor;

        console.log(email, password, nombre, ciudad, celular, profesion, habilidad, descripcion, valor);
        axios.post("http://localhost:5000/auth/signUp", { email, password })
            .then(res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            });
        axios.post("http://localhost:5000/api/nuevoProfesional", { nombre, email, ciudad, celular, profesion, habilidad, descripcion, valor })
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


    return { handleChange, values, handleSubmit, errors };

}

export default useForm;