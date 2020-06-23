import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  width: 400px;
  height: 700px;
  background-color: yellow;
`;

const BtnSim = styled.button`
  width: 60px;
  height: 60px;
  background-color: azure;
`;

const BtnNao = styled.button`
  background-color: darkseagreen;
  width: 60px;
  height: 60px;
`;

const ConteinerBtn = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Foto = styled.img`
  width: 390px;
  height: 690px;
  margin: 4px;
`;

const Detalhes = styled.div``;

const axiosConfig = {
  headers: {
    Authorization: "henrique-botelho-mello",
  },
};

const Inicial = () => {
  const [perfil, setPerfil] = useState("");

  useEffect(() => {
    Pessoa();
  }, []);

  const Pessoa = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:henriquebotelho/person",
        axiosConfig
      );
      setPerfil(response.data.profile);
    } catch (error) {
      console.log(error);
    }
  };

  const onClickMatch = async () => {
    try {
      const response = await axios.post(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:aluno/choose-person",
        {
          id: perfil.id,
          choice: true,
        }
      );
      Pessoa();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {perfil && (
        <Tela>
          <Foto src={perfil.photo} />
          <Detalhes>
            {perfil.name}, {perfil.age}, {perfil.bio}
          </Detalhes>
          <ConteinerBtn>
            <BtnNao onClick={Pessoa}>X</BtnNao>
            <BtnSim onClick={onClickMatch}>OK</BtnSim>
          </ConteinerBtn>
        </Tela>
      )}
    </div>
  );
};

export default Inicial;
