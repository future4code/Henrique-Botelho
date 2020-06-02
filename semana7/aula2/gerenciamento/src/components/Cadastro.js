import React from 'react';  
import axios from 'axios';

class Cadastro extends React.Component {
    state = {  }

    efetuaCadastro = () => {
        const body = {
            "name": "string1",
            "email": "string2"
        }

        axios.post("https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users", body, {
            headers: {
                Authorization: "henrique"
            }
        }).then(response => {
            console.log(response)
        }).catch(err => {
            console.log(err)
        })
    }

    render() { 
        return ( 
            <div>
                <input placeholder="digite o usuario"></input>
                <input placeholder="digite o email"></input>
                <button onClick={this.efetuaCadastro}> Cadastro </button>
            </div>
         );
    }
}
 
export default Cadastro;