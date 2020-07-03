import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const CreateTripPage = () => {
  useProtectedPage();
  return <div>Página Criar viagens</div>;
};

export default CreateTripPage;
