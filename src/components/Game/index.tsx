import React, { useState } from "react";
import { Board } from "../index";
import { calculateWinner } from "../../utils/calculateWinner";
import { useStateWithHistory } from "../../hooks";

export const Game = () => {
  const [squares, setSquares, { history, moveCursor }] = useStateWithHistory(
    Array(9).fill(null)
  );

  const [xIsNext, setXIsNext] = useState(true);

  const winner = calculateWinner(squares);

  function handleClick(i: number) {
    if (winner || squares[i]) {
      return;
    }

    const newSquares = squares.slice();
    newSquares[i] = xIsNext ? "X" : "O";
    setSquares(newSquares);
    setXIsNext((v) => !v);
  }

  function jumpTo(step: any) {
    moveCursor(step);
    setXIsNext(step % 2 === 0);
  }

  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }

  const moves = history.map((step: any, move: any) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button onClick={() => jumpTo(move)}>{desc}</button>
      </li>
    );
  });

  return (
    <div className="game">
      <div className="game-board">
        <Board squares={squares} onClick={(i) => handleClick(i)} />
      </div>
      <div className="game-info">
        <div>{status}</div>
        <ol>{moves}</ol>
      </div>
    </div>
  );
};
