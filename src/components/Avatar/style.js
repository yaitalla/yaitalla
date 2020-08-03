import styled, { keyframes } from 'styled-components';

const flipUp = keyframes`
    0%{
        opacity: 0;
        top: 50%;
        left: 40%;
        transform: rotateY(900deg);
    }
    20 %{
        transform: rotateY(720deg);
        top: 47%;
        left: 35%;
    }
    40 %{
        transform: rotateY(540deg);
        top: 44%;
        left: 30%;
    }
    60 %{
        transform: rotateY(360deg);
        top: 41%;
        left: 25%;
    }
    80 %{
        transform: rotateY(180deg);
        top: 38%;
        left: 20%;
    }
    100%{
        top: 30%;
        left: 10%;
        transform: rotateY(0deg);
        opacity: 1;
    }
`;

export const Wrap = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    border: 1px solid yellow;
    animation: 2s ${flipUp} ease-in forwards;
`;

export const ImgWrap = styled.figure`
    margin: 0;
    overflow: hidden;
    height: 300px;
    width: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid pink;
    border-radius: 100px / 150px;
    background: black;
    // color: white;
    @media (max-width: 600px){
        height: 150px;
        width: 100px;
    }
`;
export const Img = styled.img`
    height: 200px;
    width: 200px;
    transform: rotateY(180deg);
    @media (max-width: 600px){
        height: 100px;
        width: 100px;
    }
`;
export const ImgCaption = styled.figcaption`
    border: 1px solid red;
    width: 100%;
`;