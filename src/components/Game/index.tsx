import React, { useState } from "react";
import { Board, GameHistory, ScoreBoard } from "../index";
import { calculateWinner } from "../../utils/calculateWinner";
import { useStateWithHistory } from "../../hooks";
import { ResetButton } from "./styles";

export const Game = () => {
  const [squares, setSquares, { history, moveCursor }] = useStateWithHistory(
    Array(9).fill(null)
  );
  const [gameHasStarted, setGameHasStarted] = useState(false);

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  const handleClick = (i: number) => {
    setGameHasStarted(true);
    if (winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext((v) => !v);
  };

  const jumpTo = (step: number) => {
    moveCursor(step);
    setXIsNext(step % 2 === 0);
  };

  const resetGame = () => {
    // TODO: Reset Game
  };

  const status = winner
    ? `Winner: ${winner}`
    : `${xIsNext ? "X" : "O"} to play`;

  return (
    <>
      <ResetButton onClick={resetGame}>Reset</ResetButton>
      <Board squares={squares} onClick={handleClick} />
      <ScoreBoard status={status} />
      <GameHistory
        history={history}
        jumpTo={jumpTo}
        gameHasStarted={gameHasStarted}
      />
    </>
  );
};
