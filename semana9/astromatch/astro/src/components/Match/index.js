import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

const Tela = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  width: 400px;
  height: 700px;
  background-color: green;
`;

const axiosConfig = {
  headers: {
    Authorization: "henriquebotelho",
  },
};

const PessoaCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* weight: 40px; */
  height: 30px;
`;

const Foto = styled.img`
  width: 30px;
  height: 30px;
  margin: 4px;
`;

const BtnLimpar = styled.button`
 /* width: 40px; */
 height: 30px;
`;

const Match = () => {
  const [listaDeMatch, setListaDeMatch] = useState([]);

  useEffect(() => {
    MostrarMatch();
  }, []);

  const MostrarMatch = async () => {
    try {
      const response = await axios.get(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:henriquebotelho/matches",
        axiosConfig
      );
      setListaDeMatch(response.data.matches);
      console.log(response.data.matches);
    } catch (error) {
      console.log(error);
    }
  };

  const limparMatch = async () => {
    axios
    .put(
        "https://us-central1-missao-newton.cloudfunctions.net/astroMatch/:henriquebotelho/clear", 
        "PatusZf4mHH6UoZfYC8I", 
        {headers: {"Content-Type": "text/plain"}}
    )
    .then(r => console.log(r.status))
    .catch(e => console.log(e));
  }


  return (
    <Tela>
    <BtnLimpar onClick={limparMatch}>Limpar</BtnLimpar>
      {listaDeMatch.map((pessoa) => (
        <PessoaCard>
          {pessoa.name}
          <Foto src={pessoa.photo} />
        </PessoaCard>
      ))}
    </Tela>
  );
};

export default Match;
