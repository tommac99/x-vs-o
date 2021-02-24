import React, { FC } from "react";
import { Container, Text } from "./styles";

interface IScoreBoardProps {
  status: any;
}

export const ScoreBoard: FC<IScoreBoardProps> = ({ status }) => {
  return (
    <Container>
      <Text>{status}</Text>
    </Container>
  );
};
