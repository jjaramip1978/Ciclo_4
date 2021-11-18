import "../index.css"
import { useState } from "react";
import { Helmet } from 'react-helmet';

export const Form = (props) => {
    const [nombre, setNombre] = useState(""); //iniciada en vacio ("")
    const [documento, setDocumento] = useState("");
    const [email, setEmail] = useState("");
    const [ciudad, setCiudad] = useState("");
    const [celular, setCelular] = useState("");
    const [ingeniero, setIngeniero] = useState("");
    const [empleador, setEmpleador] = useState("");
    const [habilidades, setHabilidades] = useState("");
    const [empresa, setEmpresa] = useState("");
    const [cargo, setCargo] = useState("");
    const [oferta, setOferta] = useState("");

    const mostrarIngeniero = () => {
        setEmpleador("");
        setIngeniero(
            <div>
                <div class="mb-3">
                    <label for="disabledSelect" className="form-label">Seleccione profesión</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Ingenieria</option>
                        <option value="1">Ingenieria Industrial</option>
                        <option value="2">Ingenieria de Sitemas</option>
                        <option value="3">Ingenieria Catastral y Geodesia</option>
                    </select>
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="text-left">Habilidades</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={habilidades}
                        onChange={(e) => {
                            setHabilidades(e.target.value);
                        }}
                    />
                </div>
            </div>
        )
    }

    const mostrarEmpleador = () => {
        setIngeniero("");
        setEmpleador(
            <div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="text-left">Empresa</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={empresa}
                        onChange={(e) => {
                            setEmpresa(e.target.value);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="text-left">Cargo</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={cargo}
                        onChange={(e) => {
                            setCargo(e.target.value);
                        }}
                    />
                </div>

                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="text-left">Oferta Laboral</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={oferta}
                        onChange={(e) => {
                            setOferta(e.target.value);
                        }}
                    />
                </div>
            </div>
        )
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        //para borrar el contenido del formulario automaticamente y dejar los campos en blanco
        setNombre("");
        setDocumento("");
        setEmail("");
        setCiudad("");
        setCelular("");
    }
    /* 
        useEffect(() => {
            console.log("useEffect");
            setNombre("Lucario");
        },[ingeniero]) */
    return (
        <div className="form-container">
            <Helmet>
                <style>{'body { background-color: lightblue; }'}</style>
            </Helmet>
            <h1>Registrate</h1>
            <br></br>

            <form onSubmit={handleSubmit} className="register-form">
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="text-left">Nombre Completo</label>
                    <input
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={nombre}
                        onChange={(e) => {
                            setNombre(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Documento de Identidad</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={documento}
                        onChange={(e) => {
                            setDocumento(e.target.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">No compartiremos tu identifiación con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={email}
                        onChange={(e) => {
                            setEmail(e.target.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">No compartiremos tu email con nadie más.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Ciudad Residencia</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={ciudad}
                        onChange={(e) => {
                            setCiudad(e.target.value);
                        }}
                    />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">Número Celular</label>
                    <input type="email"
                        className="form-control"
                        id="exampleInputEmail1"
                        aria-describedby="emailHelp"
                        //Para guardar la información digitada por el usuario
                        value={celular}
                        onChange={(e) => {
                            setCelular(e.target.value);
                        }}
                    />
                    <div id="emailHelp" className="form-text">No compartiremos tu teléfono con nadie más.</div>
                </div>

                <br />
                <h3>Registrate como:</h3>
                <br />

                <div className="container">
                    <button type="button" class="btn btn-primary" onClick={mostrarIngeniero}>Ingeniero</button>
                    <button type="button" class="btn btn-secondary" onClick={mostrarEmpleador}>Empleador</button>
                </div>

                <div>
                    <br></br>
                    {ingeniero}
                    {empleador}
                </div>
            </form>
        </div>
    )
}