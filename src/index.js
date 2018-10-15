// Este archivo solo se encarga de arrancar la aplicación aquí no hay código de la app,todo ese código va en
//App.js


//Aquí importamos las herramientas necesarias de react para crear en este caso un aplicación web
import React from 'react';
import ReactDOM from 'react-dom';

//Aquí importamos todos los archivos necesarios y que afectan a nuestra aplicación como css el App...

import './index.css'; //la tecnología webpack de react permite importar archivos css desde js e incluso 
//incluirlos en html

//importamos el archivo en el que va toda la lógica de nuestra aplicación.
import App from './App'; 

// Esto hace q nuestra aplicación siga funcionando aunq no haya conexión con el servidor
import * as serviceWorker from './serviceWorker';

// el método render facilita a react renderizar(pintar)la interfaz en pantalla.
//lo que va a renderizar es la App q es la aplicación que hemos escrito.Está colocado entre tags
// que aunque parzca html lo estamos importando desde javascript,eso es porque es jsx lo que permite importar todo
//de manera general y que lo entienda el navegador.

//lo que decimos basicamente es que vamos a pintar nuestro App y el js hace referencia e donde en este caso "root"
//--- Es por eso que aquí solo usamos el nombre de la etiqueta,porque ya creamos la clase y la llamamaos por su nombre.
ReactDOM.render(<App />, document.getElementById('root'));


serviceWorker.unregister();
