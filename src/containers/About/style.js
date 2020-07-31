import styled, { keyframes } from 'styled-components';

const flipUp = keyframes`
    0%{
        opacity: 0;
        top: 50%;
        left: 40%;
        transform: rotateY(1080deg);
    }
    20 %{
        transform: rotateY(900deg);
        top: 47%;
        left: 35%;
    }
    40 %{
        transform: rotateY(720deg);
        top: 44%;
        left: 30%;
    }
    60 %{
        transform: rotateY(540deg);
        top: 41%;
        left: 25%;
    }
    80 %{
        transform: rotateY(360deg);
        top: 38%;
        left: 20%;
    }
    100%{
        top: 30%;
        left: 10%;
        transform: rotateY(180deg);
        opacity: 1;
    }
`;

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    min-height: 800px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(106,106,106,1) 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,1) 84%, rgba(106,106,106,1) 100%);
    // @media (max-width: )
`;
export const ImgWrap = styled.figure`
    margin: 0;
    overflow: hidden;
    height: 300px;
    width: 200px;
    position: absolute;
    
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid pink;
    border-radius: 100px / 150px;
    background: black;
    // color: white;
    animation: 2s ${flipUp} ease-in forwards;
`;
export const Img = styled.img`
    height: 200px;
    width: 200px;
`;
export const ImgCaption = styled.figcaption`
    border: 1px solid red;
    width: 100%;
`;
export const TextWrap = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 10px solid pink;
    width: 50%;
    height: 50%;
`;
export const LargeTxt = styled.h3`
`;
export const Txt = styled.p`
`;