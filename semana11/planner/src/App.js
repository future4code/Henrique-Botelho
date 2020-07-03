import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import styled from "styled-components";

const Escolha = styled.div`
  background-color: #fe4a49;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const ContainerTarefas = styled.div`
  width: 100%;
  height: 100vh;
  background-color: #2ab7ca;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

const Dia = styled.div`
  background-color: #fed766;
  width: 13%;
  height: 90%;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
`;

const Titulo = styled.div`
  font-size: 25px;
  padding-bottom: 40px;
`;

function App() {
  const [tarefa, setTarefa] = useState("");
  const [dia, setDia] = useState("domingo");
  const [listaDeTarefas, setListaDeTarefas] = useState([]);
  const [opcao, setOpcao] = useState("editar");

  useEffect(() => {
    obterTarefa();
  }, []);

  const criarTarefa = () => {
    axios({
      method: "post",
      url:
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-henrique-botelho",
      data: {
        text: tarefa,
        day: dia,
      },
    })
      .then((res) => {
        obterTarefa();
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  // Faz a variável listaDeTarefas conter a lista de tarefas
  const obterTarefa = () => {
    axios({
      method: "get",
      url:
        "https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-henrique-botelho",
    })
      .then((res) => {
        setListaDeTarefas(res.data);
        console.log(res.data);
      })
      .catch((err) => console.error(err));
  };

  function editarTarefa(id) {
    axios({
      method: "put",
      url: `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-henrique-botelho/${id}`,
      data: {
        text: tarefa,
        day: dia,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  function deletarTarefa(id) {
    console.log(id);
    axios
      .delete(
        `https://us-central1-labenu-apis.cloudfunctions.net/generic/planner-turma-henrique-botelho/${id}`
      )
      .then((res) => console.log(res))
      .catch((err) => console.error(err));
  }

  const handleInput = (event) => {
    setTarefa(event.target.value);
  };

  const handleDia = (event) => {
    setDia(event.target.value);
  };

  function f(odia) {
    return (
      <div>
        {listaDeTarefas.map((tarefa) => {
          if (tarefa.day == odia) {
            return (
              <div>
                {tarefa.text}
                <br />
                {tarefa.id}
                <button onClick={() => editarTarefa(tarefa.id)}>Editar</button>
                <button onClick={() => deletarTarefa(tarefa.id)}>
                  Deletar
                </button>
              </div>
            );
          }
        })}
      </div>
    );
  }

  return (
    <div>
      <Escolha>
        <label>Nova tarefa: </label>
        <input onChange={handleInput} placeholder="nome da tarefa"></input>
        <select onChange={handleDia}>
          <option value="domingo">Domingo</option>
          <option value="segunda">Segunda</option>
          <option value="terca">Terça</option>
          <option value="quarta">Quarta</option>
          <option value="quinta">Quinta</option>
          <option value="sexta">Sexta</option>
          <option value="sabado">Sábado</option>
        </select>
        <button onClick={criarTarefa}>Criar Tarefa!</button>
      </Escolha>
      <ContainerTarefas className="segunda">
        <Dia>
          <Titulo>Segunda</Titulo>
          {f("segunda")}
        </Dia>
        <Dia>
          <Titulo>Terça</Titulo>
          {f("terca")}
        </Dia>
        <Dia>
          <Titulo>Quarta</Titulo>
          {f("quarta")}
        </Dia>
        <Dia>
          <Titulo>Quinta</Titulo>
          {f("quinta")}
        </Dia>
        <Dia>
          <Titulo>Sexta</Titulo>
          {f("sexta")}
        </Dia>
        <Dia>
          <Titulo>Sábado</Titulo>
          {f("sabado")}
        </Dia>
        <Dia>
          <Titulo>Domingo</Titulo>
          {f("domingo")}
        </Dia>
      </ContainerTarefas>
    </div>
  );
}

export default App;
