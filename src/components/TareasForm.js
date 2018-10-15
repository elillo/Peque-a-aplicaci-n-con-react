import React, {Component} from 'react'; //Importamos el método component de react para poder crear uno.

class TareasForm extends Component { //creamos nuestra clase que extiende de Component
    constructor() { //Usamos esto para capturar los datos que se plasmen en el formulario que harermos ahora
        super();
        this.state = { //En el constructor ponemos los apartados que usaremos en el formulario
            title: "",
            responsible: "",
            description: "",
            priority: "low"
        };
        this.handleInput = this.handleInput.bind(this); //Con esto asociamos la clase o componente al this para que 
        this.handleSubmit = this.handleSubmit.bind(this); //Con esto asociamos la clase o componente al this para que 

        //el scope no nos de problemas y sepa a que clase nos estamos refiriendo.
    }
    // esta es la función que se ejecutará cada vez que escribamos en el input que
    // es donde hemos puest0 el metodo onChange y lo que hace es capturar el evento,
    // el valor que haya en el input y el name del input en el que se haya producido
    // dicho evento(donde hayamos escrito)
    handleInput(e) {
        const { value, name } = e.target; // creamos esta constante donde diremos que esos datos (e.target)son = a value, name
    //con el metodo set state lo que hacemos es cambiar el dato que hemos establecido inicialmente en nustra clase o constructor
    // y le decimos que lo que va a ocupar ese lugar es el value
        this.setState({
            [name]: value
        })

        // console.log(this.state); //con este console muetro el estado actual de mi aplicación.
    }

    handleSubmit(e) { //Capturamos el evento del boton submit

       e.preventDefault(); // y evitamos que actue por defecto que es refrescando el formulario cosa que queremos evitar
       this.props.onAddTareas(this.state); //aquí le pasamos con props la llamada al metodo que agrega tareas y como parámetro
       // le pasamos la tarea en si que se haya escrito ( o lo que es lo mismo, el estado de nuestro componente formulario) con this.state
       console.log("Enviando los datos");
    }

    render() { //Usamos como siempre el método render para que nos pinte la vista de TareasForm

        return (
            // y que nos lo retorne
            // FORMULARIO BOOTSTRAP
            <div className="card">
                <form className="card-body" onSubmit={ this.handleSubmit }>
                    <div className="form-group">
                        <input type="text" name="title"
                            //Este método nos permitirá ver los cambios que hayan en este input
                            onChange={this.handleInput} className="form-control" placeholder="Title"/>
                    </div>
                    <div className="form-group">
                        <input type="text" name="responsible"
                            //Por eso los ponemos en cada input
                            onChange={this.handleInput} className="form-control" placeholder="Responsible"/>

                    </div>
                    <div className="form-group">
                        <input
                            type="text"
                            name="description"
                            onChange={this.handleInput}
                            className="form-control"
                            placeholder="Description"/>
                    </div>
                    <div className="form-group">
                        <select name="priority" className="form-control" onChange={this.handleInput}>
                            <option>Low</option>
                            <option>medium</option>
                            <option>high</option>
                        </select>
                        <button className="btn btn-danger mt-3"> save</button>
                    </div>
                </form>
            </div>

        );

    }

}
export default TareasForm;