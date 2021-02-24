import React from "react";
import "./App.css";
import { Game, Background } from "./components";

export const App = () => {
  return (
    <div className="App">
      <Background />
      <Game />
    </div>
  );
};
