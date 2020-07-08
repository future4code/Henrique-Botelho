import React from "react";
import { render, fireEvent } from "@testing-library/react";
import App from "./App";

test("should ", async () => {
  const { getByText } = render(<App />);
  const addPost = getByText("AddPost");
  fireEvent.click(addPost);
  expected(getByText("/Contador/i")).toHaveTextContent("Contador: 1");
});
