import styled from "styled-components";

export const Board = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  margin: 0 auto;
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(3, 1fr);
`;
