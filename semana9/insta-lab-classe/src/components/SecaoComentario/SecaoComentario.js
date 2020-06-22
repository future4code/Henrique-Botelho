import React, { Component } from "react";
import styled from "styled-components";
import React, { useState } from "react";

const CommentContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 5px;
`;

const InputComment = styled.input`
  width: 100%;
  margin-right: 5px;
`;

const SecaoComentario = () => {
  const [inputValue, setValue] = useState("");

  onChangeComentario = (event) => {
    setValue(event.target.value);
  };

  return (
    <CommentContainer>
      <InputComment
        placeholder={"Comentário"}
        value={inputValue}
        onChange={onChangeComentario}
      />
      <button
        onClick={() => {
          enviarComentario(inputValue);
        }}
      >
        Enviar
      </button>
    </CommentContainer>
  );
};

export default SecaoComentario;
