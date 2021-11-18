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
       Profesion: 'Administrador de empresas',
       Habilidad: 'Desarrollador Web Senior', 
       Descripcion: 'Planes de diseño páginas web', 
       Experiencia: '2 años',
       Pais: 'Colombia',
       Ciudad: 'Pasto',
       Rango: '1000000-5000000',
      },

       {Id:1, 
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
        
       {Id:2, 
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

      {Id:3, 
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

      {Id:4, 
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

      {Id:5, 
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
      <div className="container-lg bg-light">
             <div className="p-3 pb-md-4 mx-auto text-center">
               <h3>
              <Menu title="Buscador de Servicios Registrados" 
              onsearch={this.onSearch}
              
              />
            
               </h3>
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

