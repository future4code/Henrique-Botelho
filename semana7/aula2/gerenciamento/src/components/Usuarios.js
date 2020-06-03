import React from "react";
import axios from "axios";

const axiosConfig = {
  headers: {
    Authorization: "henrique-botelho-mello",
  },
};

class Usuarios extends React.Component {
  state = {
    listaDeUsuarios: [],
  };

  componentDidMount() {
    this.fetchUserList();
  }

  fetchUserList = () => {
    axios
      .get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
        axiosConfig
      )
      .then((response) => {
        this.setState({ listaDeUsuarios: response.data });
      });
  };

  removeUsuario = (userId) => {
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users/${userId}`,
        axiosConfig
      )
      .then(() => {
        alert("Usuário deletado");
        this.fetchUserList();
      });
  };

  render() {
    return (
      <ul>
        {this.state.listaDeUsuarios.length === 0 && <div>Carregando...</div>}
        {this.state.listaDeUsuarios.map((user) => {
          return (
            <li>
              {user.name}
              <button onClick={() => this.removeUsuario(user.id)}>X</button>
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Usuarios;
