import React from 'react';
import Menu from '../components/Menu';
import List from '../components/List';
import axios from 'axios';


axios.defaults.withCredentials = true;

class BuscadorServicios extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            serviciosRegistrados: [],
            copyserviciosRegistrados: []

        };
    }

    componentDidMount() {
        axios.get("http://localhost:5000/api/listarServicio")
            .then((res) => {
                localStorage.setItem('serviciosRegistrados', JSON.stringify(res.data));
            })
            .catch((err) => {
                console.log(err);
                console.log('error 2');
            });
        this.initserviciosRegistrados();
    }

    initserviciosRegistrados = () => {
        const copyserviciosRegistrados=localStorage.getItem('copyserviciosRegistrados')
        this.setState((state, props) => ({
            serviciosRegistrados: JSON.parse(localStorage.getItem('serviciosRegistrados')),
            copyserviciosRegistrados: copyserviciosRegistrados ? [...JSON.parse(localStorage.getItem('copyserviciosRegistrados'))] :[]

        }));
    }

    onSearch = (query) => {
        if (query === '') {
            this.setState({ copyserviciosRegistrados: JSON.parse(localStorage.getItem('serviciosRegistrados')) });

        } else {
            const temp = [...this.state.serviciosRegistrados];
            let res = [];

            temp.forEach(item => {
                if (item.habilidad.toLowerCase().indexOf(query) > -1) {
                    res.push(item);
                }
            });

            localStorage.setItem('copyserviciosRegistrados', JSON.stringify(res));
            this.setState({ copyserviciosRegistrados: JSON.parse(localStorage.getItem('copyserviciosRegistrados')) });
        }
    }


    render() {
        return (
            <div className="app">
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
            </div>
        );
    }
}
export default BuscadorServicios;