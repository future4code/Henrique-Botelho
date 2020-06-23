import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom";
import HomePage from "./pages/HomePage";
import Routes from "./routes";

function App() {
  return (
    <div>
      <Routes />
    </div>
  );
}

export default App;
