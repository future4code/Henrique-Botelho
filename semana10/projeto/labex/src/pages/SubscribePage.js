import React from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";

const SubscribePage = () => {
  useProtectedPage();
  return <div>Página De inscrição</div>;
};

export default SubscribePage;
