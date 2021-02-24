import { FC } from "react";
import { ISquare } from "../../types/squareType";
import { SquareButton } from "./styles";

export const Square: FC<ISquare> = ({ onClick, value }) => {
  const active = value === null ? false : true;

  return (
    <SquareButton onClick={onClick} active={active}>
      {value}
    </SquareButton>
  );
};
