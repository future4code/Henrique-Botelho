import React, { useState } from "react";
import { useHistory } from "react-router";
import axios from "axios";
import styled from "styled-components";

const BotoesLogin = styled.div`
  display: flex;
  flex-direction: column;
  width: 10%;
  margin: auto;
  margin-top: 10%;
  background-color: aliceblue;
`;

const baseUrl =
  "https://us-central1-labenu-apis.cloudfunctions.net/labeX/henrique";

const LoginPage = (props) => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    const body = {
      email: email,
      password: password,
    };

    try {
      const response = await axios.post(`${baseUrl}/login`, body);

      localStorage.setItem("token", response.data.token);
      history.push("/home");
    } catch (e) {
      alert("Login falhou :(");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
  };

  return (
    <BotoesLogin>
      <input
        value={email}
        placeholder="E-mail"
        onChange={(e) => setEmail(e.target.value)}
        type="email"
      />
      <input
        value={password}
        placeholder="Senha"
        onChange={(e) => setPassword(e.target.value)}
        type="password"
      />
      <button onClick={handleLogin}>Login</button>
      <button onClick={handleLogout}>Logout</button>
      <div>Email: henrique@gmail.com.br</div>
      <div>Senha: 123456</div>
    </BotoesLogin>
  );
};

export default LoginPage;
