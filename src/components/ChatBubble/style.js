import styled, { keyframes } from 'styled-components';

const jump = keyframes`
    20% {
        transform: translateY(-8px);
    }
    50% {
        transform: translateY(0px);
    }
    100% {
        transform: translateY(0px);
    }
`;
const appear = keyframes`
    0% {
        opacity: 0;
    }
    70% {
        opacity: 0;
    }
    100% {
        opacity: 1;
        
    }
`;

export const Wrap = styled.div`
    display: flex;
    justify-content: center;
    width: 46px;
    height: 31px;
    border-radius: 6px;
    background-color: #fff;
    box-shadow: 3px 3px 0px 0px #2A6C5A;
    color: #4DBD9D;
    text-align: center;
    line-height: 32px;
    font-size: 2.5em;
    transform: translateY(200%) translateX(-100%);
    animation: 4s ${appear} forwards;
    ::before{
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 5px solid #fff;
        border-left: 5px solid #fff;
        border-right: 5px solid transparent;
        border-bottom: 5px solid transparent;
        top: 31px;
        right: 25px;
        z-index: 2;
    }
    ::after {
        content: '';
        position: absolute;
        width: 0px;
        height: 0px;
        border-top: 6px solid #2A6C5A;
        border-left: 6px solid #2A6C5A;
        border-right: 6px solid transparent;
        border-bottom: 6px solid transparent;
        top: 31px;
        right: 21px; 
        z-index: 1;
    }
    @media (max-width: 600px){
        display: none;
    }
`;

export const Circle = styled.div`
    height: 7px;
    align-self: center;
    width: 7px;
    margin-left: 2px;
    margin-right: 2px;
    background: darkgray;
    border-radius: 50%;
    animation: 1.5s ${jump} ease-in infinite;
    &:nth-of-type(2){
        animation-delay: 0.3s;
    }
    &:nth-of-type(3){
        animation-delay: 0.6s;
    }
`;