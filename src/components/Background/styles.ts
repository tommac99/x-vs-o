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
    left: -150%;
  }
  to {
    left: 110%;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      315deg,
      rgba(0, 0, 0, 0.84) 0%,
      rgba(25, 25, 25, 0.84) 74%
    ),
    url("https://media.wired.com/photos/5f592bfb643fbe1f6e6807ec/16:9/w_2400,h_1350,c_limit/business_chess_1200074974.jpg");
  background-size: cover;
  background-position: center;
`;

export const LineVertical = styled.div`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50px, 0);
  width: 2px;
  height: 100vh;
  background: linear-gradient(
    0deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

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
  background: linear-gradient(
    90deg,
    rgba(255, 255, 255, 0),
    rgba(255, 255, 255, 0.8),
    rgba(255, 255, 255, 0)
  );
  overflow: hidden;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);

  &:after {
    content: "";
    display: block;
    position: absolute;
    height: 100%;
    width: 40vh;
    top: 0;
    left: -150%;
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
