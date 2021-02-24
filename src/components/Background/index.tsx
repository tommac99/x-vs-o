import React, { FC } from "react";
import { Container, LineVertical, LineHorizontal } from "./styles";

export const Background: FC = () => {
  return (
    <Container>
      <LineVertical />
      <LineVertical />
      <LineVertical />
      <LineVertical />
      <LineHorizontal />
      <LineHorizontal />
      <LineHorizontal />
      <LineHorizontal />
    </Container>
  );
};
