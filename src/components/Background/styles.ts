import styled, { keyframes } from "styled-components";

const drop = keyframes`
  from {
    top: -50%;
  }
  to {
    top: 110%;
  }
`;

const shoot = keyframes`
  from {
    left: -50%;
  }
  to {
    left: 110%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
`;

export const LineVertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50px, 0);
  width: 2px;
  height: 100vh;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 40vh;
    width: 100%;
    top: -50%;
    left: 0;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 75%,
      #ffffff 100%
    );
    animation: ${drop} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:first-child {
    transform: translate(-149px, 0);
    &:after {
      animation-delay: 2.5s;
    }
  }
  &:nth-child(2) {
    transform: translate(-51px, 0);
    &:after {
      animation-delay: 4s;
    }
  }
  &:nth-child(3) {
    transform: translate(49px, 0);
    &:after {
      animation-delay: 1.5s;
    }
  }
  &:nth-child(4) {
    transform: translate(148px, 0);
    &:after {
      animation-delay: 5.5s;
    }
  }
`;

export const LineHorizontal = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translate(0, -150px);
  width: 100vw;
  height: 2px;
  background: rgba(255, 255, 255, 0.1);
  overflow: hidden;

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 40vh;
    top: 0;
    left: -50%;
    background: linear-gradient(
      to right,
      rgba(255, 255, 255, 0) 0%,
      #ffffff 75%,
      #ffffff 100%
    );
    animation: ${shoot} 7s 0s infinite;
    animation-fill-mode: forwards;
    animation-timing-function: cubic-bezier(0.4, 0.26, 0, 0.97);
  }

  &:nth-child(5) {
    transform: translate(0, -150px);
    &:after {
      animation-delay: 2.5s;
    }
  }
  &:nth-child(6) {
    transform: translate(0, -51px);
    &:after {
      animation-delay: 4s;
    }
  }
  &:nth-child(7) {
    transform: translate(0, 49px);
    &:after {
      animation-delay: 1.5s;
    }
  }
  &:nth-child(8) {
    transform: translate(0, 148px);
    &:after {
      animation-delay: 5.5s;
    }
  }
`;
