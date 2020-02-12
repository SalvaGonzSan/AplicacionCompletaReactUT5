import React, { Component } from 'react'
import axios from "axios";
import ContactList from './ListaContactos/ContactList'

class Api extends Component {

    // Objeto state por defecto
    state = {
      contacts: []
    };
  
    componentDidMount() {
      axios
        //Acceso al fichero json remoto
        .get("https://jsonplaceholder.typicode.com/users")
        .then(response => {
  
          // Array de contactos con los datos relevantes
          const newContacts = response.data.map(c => {
            return {
              id: c.id,
              name: c.name
            };
          });
  
          // Creamos un nuevo objeto state con sin modificar el objeto state original 
          const newState = Object.assign({}, this.state, {
            contacts: newContacts
          });
  
          // Almacenamos el nuevo objeto state en el objeto state original
          this.setState(newState);
        })
        .catch(error => console.log(error));
    }
  
    render() {
      return (
        <div className="App">
          <ContactList contacts={this.state.contacts} />
        </div>
      );
    }
  }
  

export default Api