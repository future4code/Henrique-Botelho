import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import Axios from "axios";
import styled from "styled-components";
import CardViagem from "../components/CardViagem";

const ListTripsPage = () => {
  useProtectedPage();

  const [listaDeViagens, setListaDeViagens] = useState([]);

  useEffect(() => {
    getLista();
  }, []);

  async function getLista() {
    try {
      const response = await Axios.get(
        "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique/trips"
      );
      setListaDeViagens(response.data.trips);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      {listaDeViagens.map((item) => {
        return <CardViagem dados={item} />;
      })}
    </div>
  );
};

export default ListTripsPage;
