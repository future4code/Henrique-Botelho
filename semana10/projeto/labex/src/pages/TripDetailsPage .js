import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const TripDetailsPage = () => {
  useProtectedPage();
  return <div>Página detalhar viagens</div>;
};

export default TripDetailsPage;
