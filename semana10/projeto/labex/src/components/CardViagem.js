import React, { useEffect, useState } from "react";
import { useProtectedPage } from "../hooks/useProtectedPage";
import Axios from "axios";

const CardViagem = (props) => {
  const valores = props.dados;
  return (
    <div>
      <p>{valores.name}</p>
      <p>{valores.planet}</p>
      <p>{valores.date}</p>
      <p>{valores.durationInDays}</p>
      <p>{valores.id}</p>
      <p>{valores.description}</p>
    </div>
  );
};

export default CardViagem;
