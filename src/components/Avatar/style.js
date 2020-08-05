import styled, { keyframes } from 'styled-components';

const flipUp = keyframes`
    0%{
        opacity: 0;
        top: 38%;
        left: 20%;
        transform: rotateY(180deg);
    }
    80%{
        opacity: 0;
    }
    100%{
        top: 30%;
        left: 10%;
        transform: rotateY(0deg);
        opacity: 1;
    }
`;
const appear = keyframes`
    0%{
        opacity: 0;
    }
    100%{
      opacity: 1;  
    }
`;

export const Wrap = styled.div`
    display: flex;
    position: absolute;
    flex-direction: row;
    animation: 1.5s ${flipUp} ease-in forwards;
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
    border-radius: 100px / 150px;
    background: black;
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
    border: 1px solid silver;
    width: 100%;
`;
export const TextWrap = styled.article`
    display: flex;
    opacity: 0;
    position: absolute;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 2px solid silver;
    background: silver;
    color: silver;
    border-radius: 14px;
    box-shadow: 3px 3px 0px 0px #2A6C5A;
    width: 300px;
    height: 150px;
    top: -61px;
    left: 150px;
    animation: 1s ${appear} 5s forwards;
    ::before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 10px solid silver;
        border-left: 10px solid silver;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        top: 152px;
        left: 10px;
        z-index: 2;
    }
    ::after {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 10px solid #2A6C5A;
        border-left: 10px solid #2A6C5A;
        border-right: 10px solid transparent;
        border-bottom: 10px solid transparent;
        top: 152px;
        left: 12px;
        z-index: 1;
    }
`;
export const LargeTxt = styled.h3`
    border: 1px solid #2A6C5A;
    border-radius: 6px;
`;
export const Txt = styled.p`
    border: 1px solid #2A6C5A;
    border-radius: 6px;
`;