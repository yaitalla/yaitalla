import styled, { keyframes } from 'styled-components';

const flash = keyframes`
    2% {
        color: #cfe8dd;
    }
    3% {
        color: #0f40ba;
    }
`;

export const Wrap = styled.figure`
    display: flex;
    z-index: 1;
    justify-content: center;
    align-items: center;
    background: black;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    
    @media (max-width: 600px) {
        height: 20%;
        top: 5%;
        margin: 0;
        position: absolute;
    }
`;
export const Picture = styled.img`
    position: relative;
    z-index: 3;
    border-radius: 50%;
    border: 5px solid silver;
    height: 200px;
    overflow: hidden;
    padding: 0;
    &:hover{
        cursor: pointer;
        border: 4px solid lightgrey;
        color: white;
    }
    @media (max-width: 600px) {
        height: 100px;
    }
`;