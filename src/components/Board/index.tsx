import React, { FC } from "react";
import { Square } from "..";
import { Board as BoardElement } from "./styles";

interface IBoardProps {
  onClick: (i: number) => void;
  squares: any[];
}

export const Board: FC<IBoardProps> = ({ squares, onClick }) => {
  const handleClick = (i: number) => () => {
    onClick(i);
  };

  return (
    <BoardElement>
      {squares.map((square, i) => (
        <Square key={i} value={square} onClick={handleClick(i)} />
      ))}
    </BoardElement>
  );
};
