import React from 'react';
import axios from 'axios';
import Cadastro from './components/Cadastro';
import Usuarios from './components/Usuarios'

class App extends React.Component {

  state = {
    tela: "cadastro"
  };

  
  mudaTela = () => {
    if (this.state.tela === "cadastro") {
      this.setState({tela : "usuarios"})
    } else {
      this.setState({tela: "cadastro"})
    }
  }

  render(){
    return (
      <div>
        <button onClick={this.mudaTela}>Muda tela</button>
        {this.state.tela === "cadastro" ? <Cadastro/> : <Usuarios />}
      </div>
    );
  }
}

export default App;
