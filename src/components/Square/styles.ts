import styled, { css } from "styled-components";

export const SquareButton = styled.div<{ active: boolean }>`
  width: 100%;
  height: 100%;
  background: transparent;
  font-size: 24px;
  color: rgba(255, 255, 255, 0.8);
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ active }) =>
    active &&
    css`
      background: rgba(255, 255, 255, 0.1);
      box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
      backdrop-filter: blur(4px);
      border: 1px solid rgba(255, 255, 255, 0.08);
    `};
`;
