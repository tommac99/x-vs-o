import { FC } from "react";
import "./App.css";
import { Game, Background } from "./components";

export const App: FC = () => {
  return (
    <div className="App">
      <Background />
      <Game />
    </div>
  );
};
