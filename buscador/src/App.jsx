import React from 'react';
import './App.css';
import Menu from './Menu';
import List from './List';


class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {
      serviciosRegistrados:[
      {Id:0, 
       Codigo: 'MO5001',
       Nombre: 'Lorena Vasquez',
       Correo: 'lorena_vasquez@gmail.com', 
       Profesion: 'Administracion de empresas',
       Habilidad: 'Desarrollador Web Senior', 
       Descripcion: 'Creacion e implementacion de planes de diseño para las páginas web', 
       Ciudad: 'Pasto',
       Valor: 5000000},

       {Id:1, 
       Codigo: 'MO5001', 
       Nombre: 'Carlos Marquez',
       Correo: 'carlos_marquez@gmail.com', 
       Profesion: 'Ingenieria hidraulica',
       Habilidad: 'Gerencia administracion de proyectos', 
       Descripcion: 'Diseño y desarrollo de obras hidraulicas viales', 
       Ciudad: 'Bogota',
       Valor: 5000000},
        
       {Id:2, 
       Codigo: 'MO5001', 
       Nombre: 'Daniela Tarapues',
       Correo: 'Daniela_196@hotmail.com', 
       Profesion: 'Tecnico en gesiton administrativa',
       Habilidad: 'Desarrollador web junior', 
       Descripcion: 'Manejo JAVA C#, PHYTON y SQL', 
       Ciudad: 'Bolivar',
       Valor: 3000000},

      {Id:3, 
       Codigo: 'MO5001', 
       Nombre: 'Robinson Merchancano',
       Correo: 'Robinson_HB@hotmail.com', 
       Profesion: 'Diseño web',
       Habilidad: 'Desarrollador web junior', 
       Descripcion: 'Manejo JAVA C#, PHYTON, SQL y NoSQL', 
       Ciudad: 'Montería',
       Valor: 3000000},

      {Id:4, 
       Codigo: 'MO5001', 
       Nombre: 'Mauricio Cota',
       Correo: 'Mauricio_123@gmail.com', 
       Profesion: 'Ingenieria de Sistemas',
       Habilidad: 'Desarrollador full stack', 
       Descripcion: 'Herramientas de Desarrollo de Software, lenguajes de programación back-end (PHP, Python, Bash, otros) y front-end (Angular, JavaScript, JQuery, React), Desarrollo bases de datos (MySql, SQL, PL SQL, otros), Conocimientos de Unix-Linux', 
       Ciudad: 'Villavicencio',
       Valor: 5000000},

      ],
      copyserviciosRegistrados: []
  };
}

componentDidMount(){
  this.initserviciosRegistrados();
}

initserviciosRegistrados = () =>{
  this.setState((state,props) => ({
    copyserviciosRegistrados: [...state.serviciosRegistrados]
  }));
  
}

onSearch = (query) => {
  if(query === ''){
    this.setState({copyserviciosRegistrados: [...this.state.serviciosRegistrados]});

  }else{
    const temp = [...this.state.serviciosRegistrados];
    let res = [];

  temp.forEach(item =>{
    if(item.Habilidad.toLowerCase().indexOf(query) > -1){
      res.push(item);
    }if (item.Ciudad.toLowerCase().indexOf(query) > -1) {
      res.push(item);
    }if(item.Profesion.toLowerCase().indexOf(query) > -1){
      res.push(item);
    }if(item.Nombre.toLowerCase().indexOf(query) > -1){
      res.push(item);
    }   
  });
  
  this.setState({copyserviciosRegistrados: [ ...res]});
  }
}

  render(){  
    return (
    <div className="app">
        <div className="container-lg bg-primary">
          <div className="p-3 pb-md-4 mx-auto text-center">
            <h2>
            <Menu title="Buscador de Servicios Registrados" onsearch={this.onSearch}/>
             </h2>
          </div>
        </div>
        <div>
            <List items={this.state.copyserviciosRegistrados}/>
        </div>
    </div>
  );
 }
}
export default App;

