import styled, { keyframes } from 'styled-components';

const leftRight = keyframes`
2% {
    transform: translate(50px, 0) scale(.7);
    opacity: 1;
    color: #cfe8dd;
}
3% {
    color: #0f40ba;
}
4% {
    transform: translate(0) scale(2);
    opacity: 0;
}
5% {
    transform: translate(0) scale(1);
    opacity: 1;
}
100% {
  transform: translate(0) scale(1);
  opacity: 1;
}
`;

export const Wrapper = styled.div`
  width: 100%;
  padding: 0 20px;
  margin: 0;
  display: flex;
  text-align: center;
  color: white;
  justify-content: flex-end;
  flex-direction: row;
`;

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 15px 0;
  font-family: Barcode;
  transition:  0.9s ease-in-out;
  width: 100%;
  align-self: center;
  align-items: center;
  text-align: center;
  font-size: 65px;
  @media (max-width: 1000px) {
    font-size: 55px;
  }
  @media (max-width: 850px) {
    font-size: 35px;
  }
`;
export const Letter = styled.span`
  display: inline-block;
  color: white;
  opacity: 0;
  transform: translate(-150px, 0) scale(0.3);
    animation: ${leftRight} 10s infinite;
  &:nth-of-type(2) {
    animation-delay: 0.05s;
  }
  &:nth-of-type(3) {
    animation-delay: 0.1s;
  }
  &:nth-of-type(4) {
    animation-delay: 0.15s;
  }
  &:nth-of-type(5) {
    animation-delay: 0.2s;
  }
  &:nth-of-type(6) {
    animation-delay: 0.25s;
  }
  &:nth-of-type(7) {
    animation-delay: 0.3s;
  }
  &:nth-of-type(8) {
    animation-delay: 0.35s;
  }
  &:nth-of-type(9) {
    animation-delay: 0.4s;
  }
  &:nth-of-type(10) {
    animation-delay: 0.45s;
  }
  &:nth-of-type(11) {
    animation-delay: 0.5s;
  }
  &:nth-of-type(12) {
    animation-delay: 0.55s;
  }
  &:nth-of-type(13) {
    animation-delay: 0.6s;
  }
  &:nth-of-type(14) {
    animation-delay: 0.65s;
  }
  &:nth-of-type(15) {
    animation-delay: 0.7s;
  }
  &:nth-of-type(16) {
    animation-delay: 0.75s;
  }
  &:nth-of-type(17) {
    animation-delay: 0.8s;
  }
  &:nth-of-type(18) {
    animation-delay: 0.85s;
  }
  &:nth-of-type(19) {
    animation-delay: 0.9s;
  }
  &:nth-of-type(20) {
    animation-delay: 0.95s;
  }
`;