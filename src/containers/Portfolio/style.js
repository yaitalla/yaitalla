import styled, { keyframes } from 'styled-components';

const colorshift = keyframes`
    2% {
        color: #cfe8dd;
    }
    3% {
        color: #0f40ba;
    }
    100%{
        color: white;
    }
`;

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: space-around;
    flex-direction: column;
    width: 100%;
    padding: 0;
    height: 100vh;
    background: black;
    @media (max-width: 600px) {
        height: 100vh;
        display: flex;
        position: relative;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: black;
    }
`;

export const Title = styled.h2`
    width: 90%;
    letter-spacing: 2px;
    font-size: 1.9rem;
    color: white;
    top: 20px;
    left: 0;
    text-align: right;
    position: absolute;
    align-self: flex-end;
    font-family: Teko; 
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`;

export const BtnWrap = styled.span`
    height: 25px;
    position: relative;
    display: flex;
    z-index: 10;
    letter-spacing: 3px;
    cursor: pointer;
        &:hover{
        ::before{
            visibility: visible;
            transform: scaleX(0.9);    
        }
    }
    ::before {
        content: "";
        position: absolute;
        width: 100%;
        height: 1px;
        bottom: -3px;
        left: 0;
        visibility: hidden;
        transform: scaleX(0);
        background: white;
        transition: all 0.3s ease-in-out 0s;
    }
`;
export const MoreBtn = styled.button`
    font-family: RobotoCondensed-Bold;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    animation: ${colorshift} 10s infinite;
`;

export const BtnLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-around;
`;
