import React from 'react';
import Menu from '../components/Menu';
import List from '../components/List';
import { Navigation } from "../components/navigation";
import { Footer } from "../components/footer";


class Buscador extends React.Component {

    /* Se determina componente como clase para poder modificar el estado
        de la aplicacón y así modificar la información grafica de esta por medio 
        un construcor y su variable state o estado*/

    constructor(props) {
        super(props);

        /* estado o state crea un arrego de objetos llamado serviciosRegistrados 
            con las propiedades de cada servicio registrado*/
        this.state = {
            serviciosRegistrados: [
                {
                    Id: 0,
                    Codigo: 'MO5001',
                    Nombre: 'Lorena Vasquez',
                    Correo: 'lorena_vasquez@gmail.com',
                    Profesion: 'Administrador de empresas',
                    Habilidad: 'Desarrollador Web Senior',
                    Descripcion: 'Planes de diseño páginas web',
                    Experiencia: '2 años',
                    Pais: 'Colombia',
                    Ciudad: 'Pasto',
                    Rango: '1000000-5000000',
                },

                {
                    Id: 1,
                    Codigo: 'MO5001',
                    Nombre: 'Carlos Marquez',
                    Correo: 'carlos_marquez@gmail.com',
                    Profesion: 'Ingeniero hidraulico',
                    Habilidad: 'Gerencia administracion de proyectos',
                    Descripcion: 'Obras hidraulicas viales',
                    Experiencia: '3 años',
                    Pais: 'Colombia',
                    Ciudad: 'Bogota',
                    Rango: '1000000-5000000',
                },

                {
                    Id: 2,
                    Codigo: 'MO5001',
                    Nombre: 'Daniela Tarapues',
                    Correo: 'Daniela_196@hotmail.com',
                    Profesion: 'Ingenieria en gesiton administrativa',
                    Habilidad: 'Desarrollador web junior',
                    Descripcion: 'Backand: JAVA C#, PHYTON y SQL Frontand: React',
                    Experiencia: '2 años',
                    Pais: 'Colombia',
                    Ciudad: 'Cartagena',
                    Rango: '1000000-3000000',
                },

                {
                    Id: 3,
                    Codigo: 'MO5001',
                    Nombre: 'Robinson Merchancano',
                    Correo: 'Robinson_HB@hotmail.com',
                    Profesion: 'Diseñador web',
                    Habilidad: 'Desarrollador web junior',
                    Descripcion: ' Backand: JAVA C#, PHYTON, SQL y NoSQL',
                    Experiencia: '1 año',
                    Pais: 'Colombia',
                    Ciudad: 'Montería',
                    Rango: '1000000-3000000',
                },

                {
                    Id: 4,
                    Codigo: 'MO5001',
                    Nombre: 'Mauricio Cota',
                    Correo: 'Mauricio_123@gmail.com',
                    Profesion: 'Ingeniero de Sistemas',
                    Habilidad: 'Desarrollador full stack',
                    Descripcion: 'Backend:(PHP, Python, Bash, otros) Frontend: (Angular, JavaScript, JQuery, React), Bases de datos (MySql, SQL, PL SQL, otros), Unix-Linux',
                    Experiencia: '4 años',
                    Pais: 'Colombia',
                    Ciudad: 'Villavicencio',
                    Rango: '1000000-5000000',
                },

                {
                    Id: 5,
                    Codigo: 'MO5001',
                    Nombre: 'Yenny Valencia',
                    Correo: 'Yenny@gmail.com',
                    Profesion: 'Ingeniero de Sistemas',
                    Habilidad: 'Desarrollador full stack',
                    Descripcion: 'Backend:(PHP, Python, Bash, otros) Frontend: (Angular, JavaScript, JQuery, React), Bases de datos (MySql, SQL, PL SQL, otros), Unix-Linux',
                    Ciudad: 'Cucuta',
                    Experiencia: '5 años',
                    Pais: 'Colombia',
                    Rango: '1000000-5000000',
                },

            ], /* Ahora necesitamos pasar esta información al componente List.jsx el cual va a utilizar
            cada una de las propiedades de cada uno de los servicios registrados, especificados en 
            el arreglo serviciosRegistrados como items para poder renderizar los elementos*/

            /* Para la busqueda se necesita hacer un filtrado entonces
            se crea una copia del arreglo serviciosRegistrados porque se necesita como
            referencia un arreglo inicial y que el original 
            no sea modificado, mas que sea para añadir o borrar elementos
            por eso se crea una copia con un arreglo vacio 
            es decir se va a buscar sobre copyserviciosRegistrados, el cual requiere 
            hacerse popular*/
            copyserviciosRegistrados: []

        };
    }

    /* copyserviciosRegistrados requiere 
    hacerse popular, para eso se llamarfuncion componentDidMount,
    dentro de la cual se llama otra función llamada this.initserviciosRegistrado 
    para poder rellenar los servicios registrados tanto la copia como una vez se tengan los
    servicios registrados completos, siempre haya una copia igual a la de los servicios registrados originales*/
    componentDidMount() {
        this.initserviciosRegistrados();
    }

    initserviciosRegistrados = () => {
        /*llamo al state, así this.setState a modo de función de flecha 
        con su state y props de esta manera
        funciona de manera asincrona para que cada vez que 
        se ejecute initServiciosRegistrados copyserviciosRegistrado va a 
        hacer una copia de state.serviciosRegistrados*/
        this.setState((state, props) => ({
            copyserviciosRegistrados: [...state.serviciosRegistrados]
        }));

    }

    onSearch = (query) => { /*Se crea funcion de onSearch*/
        if (query === '') {
            /*Esta funcion necesita un query, se valida que el query sea vacio o no,
            si el query es vacio, se copian los servicios registrados y se los regresa 
            al estado inicial, se manda a llamar a 
            initserviciosRegistrado() */
            this.initserviciosRegistrados();

        } else {
            /*Si contiene texto, se crea un arreglo temporal de serviciosRegistrados
            y se crea otro arreglo temporal que se llame res que es lo
            que se va a devolver*/
            const temp = [...this.state.serviciosRegistrados];
            let res = [];

            /*Se crea un forEach para recorrer cada elemento y se valida con un if 
            que si el titulo del elemento que se transforma a minusculas es mayor de -1 
            cuando aplico un indexOf() el cual me ba a buscar la coincidencia si es -1 
            entonces ese resultado se añade al arreglo de res */
            temp.forEach(item => {
                if (item.Habilidad.toLowerCase().indexOf(query) > -1) {
                    res.push(item);

                    /* Se especifica por las propiedades que van a ser filtrados en la busqueda
                    Ciudad, profesión, Nombre, Habilidad */

                } if (item.Ciudad.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                } if (item.Profesion.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                } if (item.Nombre.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                }
            });

            /*Cuando se cumpla el ciclo se actualizará el estado de 
            copyserviciosRegistrados que es el que se puede manipular
            para que tenga el resultado de res, es decir res es el arreglo
            que tiene ya los resultados filtrados deacuerdo al query
            que se esta colocando y se lo copia para que sea igual a copyserviciosRegistrados*/
            this.setState({ copyserviciosRegistrados: [...res] });
        }
    }


    render() {
        return (
            <div className="app">
                <Navigation />
                <div className="container-lg bg-light">
                    <div className="p-3 pb-md-4 mx-auto text-center">
                        <h3>
                            {/*se crea evento onsearch que tiene definido el algoritmo para poder filtrar
                            las busquedas por ciertas propiedades, manda a llamar
                            a this.onSearch */}
                            <Menu title="Buscador de Servicios Registrados"
                                onsearch={this.onSearch}
                            />
                        </h3>
                    </div>
                </div>
                <div>
                    {/* Se establece un nuevo props, llamado items para enviarle el arreglo al componente List.jsx, se crea con
                    this porque el componente App.jsx ha sido declarado como un componente clase para dar a entender
                    que esta bajo el mismo contexto de toda la clase, y de esta manera se determina el estado
                    state haciendo referencia a la copia de los servicios registrados que es lo que finalmente va a ser
                    modificado  identica al
                    arreglo original para enviar este arreglo de datos como si fuera una propiedad */}

                    <List items={this.state.copyserviciosRegistrados} />
                </div>
                <Footer />
            </div>
        );
    }
}
export default Buscador;