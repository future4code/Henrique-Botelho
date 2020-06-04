import React from "react";
import Axios from "axios";

export class App extends React.Component {
  state = {
    atividade: {},
  };

  pegaAtividade = () => {
    Axios.get(`http://www.boredapi.com/api/activity/`)
      .then((response) => {
        this.setState({ atividade: response.data });
      })
      .catch((err) => {
        alert(err);
      });
  };

  render() {
    return (
      <div>
        <button onClick={this.pegaAtividade}> Gerar atividade </button>
        <div>{this.state.atividade.activity}</div>
      </div>
    );
  }
}

export default App;
