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
       Correo: 'lorena_vasquez@gmail.com', 
       Habilidad: 'Desarrollador Web Senior', 
       Descripcion: 'Creacion e implementacion de planes de diseño para las páginas web', 
       Valor: 5000.000},

       {Id:1, 
       Codigo: 'MO5001', 
       Correo: 'carlos_marquez@gmail.com', 
       Habilidad: 'Gerencia administracion de proyectos', 
       Descripcion: 'Diseño y desarrollo de obras hidraulicas viales', 
       Valor: 5000.000},
        
       {Id:2, 
       Codigo: 'MO5001', 
       Correo: 'Daniela_196@hotmail.com', 
       Habilidad: 'Desarrollador web junior', 
       Descripcion: 'Manejo JAVA C#, PHYTON y SQL', 
       Valor: 3000.000},

      {Id:3, 
       Codigo: 'MO5001', 
       Correo: 'Robinson_HB@hotmail.com', 
       Habilidad: 'Desarrollador web junior', 
       Descripcion: 'Manejo JAVA C#, PHYTON, SQL y NoSQL', 
       Valor: 3000.000},

      {Id:4, 
       Codigo: 'MO5001', 
       Correo: 'Mauricio_123@gmail.com', 
       Habilidad: 'Desarrollador full stack', 
       Descripcion: 'Herramientas de Desarrollo de Software, lenguajes de programación back-end (PHP, Python, Bash, otros) y front-end (Angular, JavaScript, JQuery, React), Desarrollo bases de datos (MySql, SQL, PL SQL, otros), Conocimientos de Unix-Linux', 
       Valor: 5000.000},

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
    }
  });
  
  this.setState({copyserviciosRegistrados: [ ...res]});
  }
}

  render(){  
    return (
    <div className="app">

      <Menu title="Buscador de Servicios Registrados" onsearch={this.onSearch}/>
      <List items={this.state.copyserviciosRegistrados}/>

    </div>
  );
 }
}
export default App;
