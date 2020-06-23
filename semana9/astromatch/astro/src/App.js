import React, { useState } from "react";
import styled from "styled-components";
import Match from "./components/Match";
import Inicial from "./components/Inicial";

const BtnMudaTela = styled.button`
  width: 50px;
  height: 50px;
  background-color: red;
  color: white;
`;

const Centro = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

function App() {
  const [tela, setTela] = useState("Inicial");

  const onClickMudaTela = () => {
    if (tela == "Inicial") {
      setTela("Match");
    } else {
      setTela("Inicial");
    }
  };

  return (
    <Centro>
      <BtnMudaTela onClick={onClickMudaTela}>Mudar Tela</BtnMudaTela>
      {tela === "Inicial" && <Inicial></Inicial>}
      {tela === "Match" && <Match></Match>}
    </Centro>
  );
}

export default App;
