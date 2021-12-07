import { useState } from 'react';
import axios from 'axios';

axios.defaults.withCredentials = true;

const useForm = (validate) => {
    const [values, setValues] = useState({
        id: '61a574a8b4e553549f20ec30',
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
    const [errors] = useState({})

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
        axios.post("https://app-backend-2-ingenio.herokuapp.com/auth/signUp", { email, password })
            .then(res => {
                console.log(res);
                console.log("Usuario registrado");
                localStorage.setItem('userId', res.data.id);
                const idUser = localStorage.getItem('userId');
                console.log(idUser);
                axios.post("https://app-backend-2-ingenio.herokuapp.com/api/nuevoProfesional",
                    { idUser, nombre, email, ciudad, celular, profesion, habilidad, descripcion, valor })
                    .then(res2 => {
                        console.log(res2);
                        localStorage.setItem('id', res2.data._id);
                        localStorage.setItem('email', email);
                        console.log(localStorage.getItem('email'));
                        window.location.replace('');
                    })
                    .catch(err2 => {
                        console.log(err2);
                    });
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

    const handleSubmit2 = e => {
        e.preventDefault();
        const email = values.email;
        const password = values.password;
        const nombre = values.nombre;
        const ciudad = values.ciudad;
        const celular = values.celular;
        const empresa = values.empresa;

        console.log(email, password, nombre, ciudad, celular, empresa);
        axios.post("https://app-backend-2-ingenio.herokuapp.com/api/nuevoCliente", { nombre, email, ciudad, celular, empresa })
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
        // window.location.replace('');
        // setErrors(validate(values));
    }

    return { handleChange, values, handleSubmit, handleSubmit2, errors };

}

export default useForm;