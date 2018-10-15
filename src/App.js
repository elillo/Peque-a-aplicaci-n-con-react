import React, { Component } from 'react'; //Aquí estamos haciendo uso del método component que corresponde a react y lo importamos
//para poder crear un componente de nuestra aplicación **

import logo from './logo.svg'; //El logo en pantalla.

import './App.css'; //Este es el css.
//Esto es JSX para que react pueda renderizarlo debe estar dentro de etiquetas en este caso las <div>
//si no es así nos saldra un error,esto es porque no puede renderizar más de una etiqueta,por eso las metemos
//entre <div>para que pueda renderizar todo lo que haya dentro

import { tareas } from './tareas.json';

import TareasForm from './components/TareasForm';




class App extends Component {
//** Por eso aquí creamos la clase App que extiende de Component.Los componentes irán encapsulados en clases
//temdremos una clase navegación,otra chat por ej etc...Así vamos encapsulando funcionalidad que luego podremos usar solo
//llamando al nombre lo bueno es que podemos una vez hecho el componente usarlo tantas veces como queramos.  ----ver index.js-->

constructor(){
  //Este metodo constructor se inicia antes de que se renderice nada,lo usamos para almacenar datos del servidor,para que pueda 
  //hacerlo debe heredar primero con el metodo super() toda la funcionalidad que nos trae el componente de react.
    super();
    //Hay que procurar mantener esto lo más limpio posible ya que esto se almacena en memoria para luego mostrarse en pantalla.
    //y lo colocaremos entre llaves (ya q es JS) en el componente q queramos mostrarlo.
    //Aquí almacenaremos los datos del formulario por ejemplo
    this.state= {
      tareas  //  Todas la tareas,el estado de las tareas.***
    };
    this.handleAddTareas = this.handleAddTareas.bind(this);

  }

  handleAddTareas(tareas) { // Creamos este método para agregarle las tareas que se creen a la array del objeto json de tareas que ya había creado
    this.setState({

      tareas: [...this.state.tareas, tareas]// con esto agragamos las nuevas tareas ***
    })
  }
// Este método se desatará con el evento onClick que hemos asociado al button de borrar en nuestro formulario
//y lo que recibiremos como parámetro que es lo que le indica lo que vamos a borrar es en este caso el indice de la tarea.
  removeTarea(index) { //-*-
    if (window.confirm('Are you sure want to delete it?')) {

      this.setState({
        tareas: this.state.tareas.filter((e, i) => { //El método filter nos devuelve un arreglo con ciertos datos si cumplen una condición
          // si no no los agragará.por eso como parametros de este metodo le decimos, vamos a recorrer las tareas(e) y me retornas todos los datos
          //excepto los indices que sean diferentes a los indices de la tarea.Osea,le voy a dar el indice-*-,si lo encuentra dentro del array lo va aquitar.
             return i !== index
        })
      })
    }
      
  }

  render() {
//En el primer render vamos a darle una interfaz a los datos de nuestro objeto json para que se pinte pero como queremos cada uno 
//con su indice despues de acceder a this.state.tareas incluimos .map para cn ese bucle recorrerlas.Para poder usarlo lo meteremos en 
    
    const verTareas = this.state.tareas.map((tarea, i)=>{ //una constante y lo colocamos debajo de la navegacion,entre llaves ya que es una operación de JS 

      //Aquí especificamos como queremos visualizarlo,en un div con la clase de bootstrap cards y debjo y entre llaves
      //lo que queremos ver del objeto que es este caso es el tarea.title
    return (
        <div className="col-md-3 mx-auto">
         <div className="card mt-3">
          <div className="card-header">
           <h3>{tarea.title}</h3>
           <span className="badge badge-pill badge-danger ml-2">
             { tarea.priority }
           </span>
          </div>
         <div className="card-body">
         <p>{ tarea.responsible }</p>
           <p>{ tarea.description }</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-danger"
          onClick={ this.removeTarea.bind(this, i) }
          >
           Delete
          </button>
        </div>
     </div>

      </div>
      )

    })

    return (
     // React usa className en vez de class para evitar conflictos cn css
     <div className="App">

       <nav className="navbar navbar-dark bg-dark">
        <a href="" className="text-white">
         Tasks
         <span className="badge badge-pill badge-light ml-2">
           { this.state.tareas.length }
         </span>
        </a> 
       </nav>
       
      <div className="container">
        <div className="row">
        <TareasForm onAddTareas={ this.handleAddTareas } />
        { verTareas }
        </div>
        </div>
      <img src={logo} className="App-logo" alt="logo" /> 
    </div>
    );
  }
}

export default App;
