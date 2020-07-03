import React from "react";
import { useHistory } from "react-router";
import { useProtectedPage } from "../hooks/useProtectedPage";
import styled from "styled-components";

const BotoesPaginas = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: auto;
  margin-top: 10%;
  background-color: aliceblue;
`;

const HomePage = () => {
  useProtectedPage();
  const history = useHistory();
  const goToListTrips = async () => {
    history.push("/trips/list");
  };
  const goToSubscribePage = async () => {
    history.push("/subscribe-form");
  };
  const goToTripDetailPage = async () => {
    history.push("/trips/details");
  };
  const goToCreateTripPage = async () => {
    history.push("/trips/create/");
  };

  return (
    <BotoesPaginas>
      <button onClick={goToListTrips}>Lista de Viagens</button>
      <button onClick={goToCreateTripPage}>Criar Viagens</button>
      <button onClick={goToSubscribePage}>Pagina de Inscrição</button>
      <button onClick={goToTripDetailPage}>Página de Detalhes da Viagem</button>
    </BotoesPaginas>
  );
};

export default HomePage;
