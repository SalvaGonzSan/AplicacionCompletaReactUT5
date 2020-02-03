import React, {Component} from 'react';

class Formulario extends Component {
    constructor(props) {
        super(props);
        
        this.initialState = {
            name: ''
        };

        this.state = this.initialState;
    }

    manejarCambio = evento => {
        const { name, value } = evento.target;

        this.setState({
            [name] : value
        });
    }

    enEnvioFormulario = (evento) => {
        evento.preventDefault();
        
        this.props.manejarEnvio(this.state);
        this.setState(this.initialState);
    }

    render() {
        const { name } = this.state; 

        return (
            <form onSubmit={this.enEnvioFormulario}>
                <label for="nombreid">Nombre</label>
                <input 
                    type="text" 
                    name="name" 
                    id="nombreid"
                    value={name} 
                    onChange={this.manejarCambio} />
                
                <button type="submit">
                    Enviar Datos
                </button>
            </form>
        );
    }
}

export default Formulario