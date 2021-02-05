import styled, {keyframes} from 'styled-components';

const animate = keyframes`
    0% {
        background-position: -500%;
        opacity: 1;
    }
    100% {
        background-position: 500%;
    }
`;
const animY = keyframes`
    0%{
        clip-path: polygon(0 0, 20% 0, 30% 0, 50% 0, 70% 0, 80% 0, 100% 0, 100% 50%, 100% 80%, 100% 100%, 0 100%, 0 80%, 0 50%);
    }
    40% {
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
    }
    80%{
        width: 30%;
        height: 30%;
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
    }
    100%{
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
        width: 30%;
        height: 30%;
    }
`;
const animA = keyframes`
    0%{
        clip-path: polygon(0 0, 100% 0, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 99%, 0 100%, 0 40%, 0 30%, 0 20%, 0 10%);
    }
    40% {
        clip-path: polygon(30% 0, 70% 0, 51% 5%, 70% 64%, 90% 95%, 100% 100%, 60% 100%, 70% 95%, 60% 70%, 50% 60%, 60% 50%, 50% 38%, 40% 50%, 49% 60%, 40% 70%, 30% 95%, 40% 100%, 0 100%, 10% 95%, 30% 64%, 49% 5%);
    }
    80% {
        width: 30%;
        height: 30%;
    }
    100%{
        clip-path: polygon(30% 0, 70% 0, 51% 5%, 70% 64%, 90% 95%, 100% 100%, 60% 100%, 70% 95%, 60% 70%, 50% 60%, 60% 50%, 50% 38%, 40% 50%, 49% 60%, 40% 70%, 30% 95%, 40% 100%, 0 100%, 10% 95%, 30% 64%, 49% 5%);
        width: 30%;
        height: 30%;
    }
`;
const animYSmall = keyframes`
    0%{
        clip-path: polygon(0 0, 20% 0, 30% 0, 50% 0, 70% 0, 80% 0, 100% 0, 100% 50%, 100% 80%, 100% 100%, 0 100%, 0 80%, 0 50%);
    }
    40% {
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
    }
    80%{
        width: 70%;
        height: 30%;
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
    }
    100%{
        clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);
        width: 70%;
        height: 30%;
    }
`;
const animASmall = keyframes`
    0%{
        clip-path: polygon(0 0, 100% 0, 100% 10%, 100% 20%, 100% 30%, 100% 40%, 100% 100%, 90% 100%, 80% 100%, 70% 100%, 60% 100%, 50% 100%, 40% 100%, 30% 100%, 20% 100%, 10% 99%, 0 100%, 0 40%, 0 30%, 0 20%, 0 10%);
    }
    40% {
        clip-path: polygon(30% 0, 70% 0, 51% 5%, 70% 64%, 90% 95%, 100% 100%, 60% 100%, 70% 95%, 60% 70%, 50% 60%, 60% 50%, 50% 38%, 40% 50%, 49% 60%, 40% 70%, 30% 95%, 40% 100%, 0 100%, 10% 95%, 30% 64%, 49% 5%);
    }
    80% {
        width: 70%;
        height: 30%;
    }
    100%{
        clip-path: polygon(30% 0, 70% 0, 51% 5%, 70% 64%, 90% 95%, 100% 100%, 60% 100%, 70% 95%, 60% 70%, 50% 60%, 60% 50%, 50% 38%, 40% 50%, 49% 60%, 40% 70%, 30% 95%, 40% 100%, 0 100%, 10% 95%, 30% 64%, 49% 5%);
        width: 70%;
        height: 30%;
    }
`;


export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
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

export const Y = styled.div`
    width: 100%;
    position: absolute;
    height: 100%;
    background: rgba(50,50,50,0.2);
    animation: 1s ${animY} 1s linear forwards;
    @media (max-width: 600px) {
        width: 100%;
        position: absolute;
        height: 100%;
        background: rgba(50,50,50,0.2);
        animation: 1s ${animYSmall} 1s linear forwards;
    }
`;
export const A = styled.div`
    width: 100%;
    height: 100%;
    background: rgba(50,50,50,0.2);
    animation: 1s ${animA} 2.5s linear forwards;
    position: absolute;
    @media (max-width: 600px) {
        width: 100%;
        height: 100%;
        background: rgba(50,50,50,0.2);
        animation: 1s ${animASmall} 2.5s linear forwards;
        position: absolute;
    }
`;

export const Welcome = styled.p`
    position: relative;
    opacity: 0;
    text-transform: uppercase;
    top: 20%;
    font-size: 2em;
    letter-spacing: 3px;
    overflow: hidden;
    background: linear-gradient(90deg, #000, #fff, #000);
    background-repeat: no-repeat;
    background-size: 80%;
    animation: 3s ${animate} 3s linear forwards;
    -webkit-background-clip: text;
    -webkit-text-fill-color: rgba(255, 255, 255, 0);
`;