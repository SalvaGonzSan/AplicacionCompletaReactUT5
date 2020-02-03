import React, { Component } from 'react'
import Tabla from './Tabla'
import TablaComponentesSimples from './TablaComponentesSimples'
import TablaComponentesSimplesProps from './TablaComponentesSimplesProps'
import TablaComponentesSimplesState from './TablaComponentesSimplesState'
import Formulario from './Formulario'
//import personajes from './personajes.json'

class App extends Component {
 /*Objeto para utilizar en state*/
/*
  state = {
    personajes: [
      {
        name: 'Payton Hobart',
      },
      {
        name: 'Wendy Carr',
      },
      {
        name: 'Mina',
      },
      {
        name: 'Jonathan Harker',

      },
      {
        name: 'Drácula',
      },
      {
        name: 'Once',
      },
      {
        name: 'Jim Hopper',
      }
    ]
  }
*/
/*Utilizo un fichero JSON local*/
/*state = { personajes }*/

/*Voy a utilizar una colección vacía para luego ir rellenándola mediante un formulario*/

state = { personajes: [] }

/*Método para borrar personajes*/
borrarPersonaje = indice => {
  const { personajes } = this.state;

  this.setState({
    personajes: personajes.filter((personaje, i) => {
      return i !== indice;
    })
  });
}
/*Para manejar los datos del formulario*/
manejarEnvio = personaje => {
  this.setState({personajes: [...this.state.personajes, personaje]});
}


  render() {
    /*Para utilizar en state*/
    const { personajes } = this.state

    /*Objeto para utilizar en props*/
    const actoresactrices = [
      {
        nombre: 'Joel',
        apellidos: 'Edgerton',
      },
      {
        nombre: 'Carmen',
        apellidos: 'Maura',
      },
      {
        nombre: 'Luis',
        apellidos: 'Tosar',
      },
      {
        nombre: 'Chloe',
        apellidos: 'Grace Moretz',
      }
    ]
   

    return (
      <div className="App">
        <h2>Tabla creada con un componente de clase</h2>
        <Tabla />
        <br></br>
        <h2>Tabla creada con un componente de clase que utiliza dos componentes simples</h2>
        <TablaComponentesSimples />
        <br></br>
        <h2>Tabla creada con un componente de clase (con props) que utiliza dos componentes simples</h2>
        <TablaComponentesSimplesProps datosActoresActrices={actoresactrices} />

        <h2>Tabla creada con un componente simple (con state y que permite eliminar elementos) que utiliza dos componentes simples</h2>
        <TablaComponentesSimplesState datosPersonaje={personajes} borrarPersonaje={this.borrarPersonaje} />
        <h2>Añadir nuevo</h2>
        <Formulario manejarEnvio={this.manejarEnvio} />
        <h2>Menú con rutas</h2>
      </div>
    )
  }
}

export default App