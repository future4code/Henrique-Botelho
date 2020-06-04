import React from 'react';  
import axios from 'axios';

class Cadastro extends React.Component {
    state = { 
        usuario: "",
        email: ""
     }

    efetuaCadastro = () => {
        const body = {
            "name": this.state.usuario,
            "email": this.state.email
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "henrique-botelho-mello"
            }
        }).then(response => {
            alert("Cadastrado com sucesso!")
        }).catch(err => {
            console.log(err)
            alert("Ocorreu um erro ao cadastrar")
        })
    }

    onChangeUsuarioValue = event => {
        this.setState({usuario: event.target.value });
    };

    onChangeEmailValue = event => {
        this.setState({email: event.target.value });
    };

    render() { 
        return ( 
            <div>
                <input onChange={this.onChangeUsuarioValue} value={this.state.usuario} placeholder="digite o usuario"></input>
                <input onChange={this.onChangeEmailValue} value={this.state.email} placeholder="digite o email"></input>
                <button onClick={this.efetuaCadastro}> Cadastro </button>
            </div>
         );
    }
}
 
export default Cadastro;