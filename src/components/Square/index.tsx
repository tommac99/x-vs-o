import { FC } from "react";
import { ISquare } from "../../types/squareType";
import { SquareButton } from "./styles";

export const Square: FC<ISquare> = ({ onClick, value }) => {
  return <SquareButton onClick={onClick}>{value}</SquareButton>;
};
