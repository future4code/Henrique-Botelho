import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "henrique-botelho-mello",
  },
};

class App extends React.Component {
  state = {
    listaDePlaylists: {},
  };

  componentDidMount() {
    this.pegaAsPlaylists();
  }

  render() {
    return (
      <div>
        <button>Criar Playlists</button>
        <div>{this.state.listaDePlaylists}</div>
      </div>
    );
  }

  pegaAsPlaylists = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",
        axiosConfig
      );
      console.log("1");
      const lista = response;
      console.log("2");
      console.log(lista);
      console.log(typeof lista);
      this.setState({ listaDePlaylists: lista });
      console.log("3");
    } catch (error) {
      console.log("algo deu errado");
    }
  };
}

export default App;
