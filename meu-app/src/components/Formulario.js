import React from 'react';

class Formulario extends React.Component {
    constructor(props) {
        super(props);

        /*estado inicial. Aqui formulario tem alguns campos sobre o cliente:
        input texto > nome:
        multi select > marca do ar condicionado: Carrier/ Daikin/ Gree/ Springer/ Fujitsu/ JCM/ Midea/ LG
        duas opções > tipo: comercial / residencial
        checkbox > é membro anual?: 
        pequena descrição do cliente
        */

        this.state = {nome: '', modelo: 'Gree', tipo: 'residencial', membro: true, bio: ' '}

        this.handleSubmit = (event) => {
            event.preventDefault();
            console.log(this.state);
        }

        this.changeName = (event) => {
            this.setState({nome: event.target.value})
        }

        this.changeSelect = (event) => {
            this.setState({modelo: event.target.value})
        }

        this.changeRadio = (event) => {
            this.setState({tipo: event.target.value})
        }

        this.changeCheckbox = (event) => {
            this.setState({membro: event.target.checked})
        }

        this.changeBio = (event) => {
            this.setState({bio: event.target.value})
        }

    }

    render() {
        return (
            <>
            <form onSubmit={this.handleSubmit}>
                <label>
                    Nome: <input type="text" value={this.state.nome} onChange={this.changeName} />
                </label>
                <br />
                <label>
                    Modelo do ar 
                    <select value ={this.state.modelo} onChange={this.changeSelect}>
                        <option>Gree</option>
                        <option>Carrier</option>
                        <option>Daikin</option>
                        <option>Springer</option>
                        <option>LG</option>
                        <option>Fujitsu</option>
                    </select>
                </label>
                <br />
                <label>
                    É residencial ou comercial? 
                    <input type="radio" checked={this.state.tipo === 'residencial'} onChange={this.changeRadio} value='residencial'/> Residencial 
                    <input type="radio" checked={this.state.tipo === 'comercial'} onChange={this.changeRadio} value='comercial' /> Comercial
                </label>
                <br />
                <label>
                    <input type="checkbox" checked={this.state.membro} onChange={this.changeCheckbox} /> É membro anual
                </label>
                <br />
                <label>
                    Bio
                    <textarea cols="50" value={this.state.bio} onChange={this.changeBio} />
                </label>
                <br />
                <input type="submit" value="Salvar" />

            </form>
            </>
        )
    }
}

export default Formulario;
 