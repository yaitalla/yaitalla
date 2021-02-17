import styled, {keyframes} from 'styled-components';

const flash = keyframes`
    2% {
        color: #cfe8dd;
    }
    3% {
        color: #0f40ba;
    }
`;

const appear = keyframes`
    
    90%{
        opacity: 0;
        transform: translate(200%);
    }
    100%{
        opacity: 1;
        transform: translate(0%);
    }
`;

const first = keyframes`
    25%{
        transform: translateY(0%);
        opacity: 1;
    }
    50%{
        transform: translateY(-100%);
    }
    75%{
        transform: translateY(-200%);
    }
    100%{
        transform: translateY(-300%);
        opacity: 1;
    }
`;
const second = keyframes`
    25%{
        transform: translateX(30%) translateY(0%);
        opacity: 0;
    }
    50%{
        transform: translateX(0%) translateY(0%);
        opacity: 1;
    }
    75%{
        transform: translateY(-100%);
    }
    100%{
        transform: translateY(-200%);
        opacity: 1;
    }
`;
const third = keyframes`
    50%{
        transform: translateX(30%) translateY(0%);
        opacity: 0;
    }
    75%{
        transform: translateX(0%) translateY(0%);
        opacity: 1;
    }
    100%{
        transform: translateY(-100%);
        opacity: 1;
    }
`;
const fourth = keyframes`
    75%{
        opacity: 0;
        transform: translateX(30%) translateY(0%);
    }
    100%{
        transform: translateX(0%) translateY(0%);
        opacity: 1;
    }
`;


export const Wrap = styled.div`
    transition: 1s ease-in-out;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 50%;
    opacity: ${props => props.visu};
    height: 50%;
    transform: translate(${props => props.slide}%);
    @media (max-width: 600px) {
        display: flex;
        transform: translate(${props => props.slide - 50}%);
        width: 80%;
        top: 30%;
        height: 40%;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;

export const Side = styled.div`
    z-index: 0;
    display: flex;
    position: absolute;
    left: 40%;
    bottom: 33%;
    justify-content: center;
    align-items: center;
    opacity: 0;
    transform: translate(200%);
    &.slided{
        transform: translate(200%);
        animation: ${appear} 2s forwards;
    }
    @media (max-width: 600px) {
        left: 40%;
        bottom: 15%;
        &.slided{
            transform: translate(200%);
            animation: ${appear} 2s forwards;
        }
    }
`;

export const Text = styled.h3`
    width: 100%;
    position: absolute;
    opacity: 0;
    font-family: RobotoCondensed-Bold;
    display: flex;
    justify-content: flex-start;
    color: white;
    font-size: 2rem;
    transition:  0.9s ease-in-out;
    &.slided{
        &:nth-of-type(1){
            opacity: 0;
            animation: ${first} 7s forwards;
        }
        &:nth-of-type(2){
            opacity: 0;
            transform: translateX(30%) translateY(-200%);
            animation: ${second} 7s forwards;
        }
        &:nth-of-type(3){
            opacity: 0;
            transform: translateX(30%) translateY(-100%);
            animation: ${third} 7s forwards;
        }
        &:nth-of-type(4){
            opacity: 0;
            transform: translateX(30%) translateY(0%) scale(1.1);
            animation: ${fourth} 7s forwards, ${flash} 10s ease infinite;
            &:hover{
                cursor: pointer;
                -webkit-text-stroke: 1px black;
                color: white;
            }
        }
    }
    @media (max-width: 600px) {
        font-size: 1.2rem;
        margin: 10px;
    }
`;