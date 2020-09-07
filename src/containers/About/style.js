import styled, {keyframes} from 'styled-components';

const textRight = keyframes`
    0%{
        transform: translate(-80%, 0%);
        opacity: 0;
    }
    50% {
        transform: translate(-40%, 0%);
        opacity: 0;
    }
    100% {
        transform: translate(0%, 0%);
        opacity: 1;
    }
`;
const animationLeft = keyframes`
    0% {
        transform: translate(160%, 0%);
    }
    100% {
        transform: translate(0%, 0%);
    }
`;

export const LeftSide = styled.div`
    z-index: 2;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 90%;
    margin-top: 10px;
`;
export const RightSide = styled.div`
    width: 100%;
    height: 90%;
    margin-top: 10px;
    z-index: 2;
    display: flex;
    justify-content: center;
    flex-direction: column;
`;
export const YassinePic = styled.img`
    position: relative;
    border-radius: 50%;
    border: 5px solid white;
    height: 200px;
    transform: translate(160%, 0%);
    overflow: hidden;
    animation: 1s ${animationLeft} linear forwards;
    -webkit-animation: 1s ${animationLeft} linear forwards;
    padding: 0;
`;
export const Text = styled.h3`
    width: 80%;
    min-width: 300px;
    opacity: 0;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    animation: 1s ${textRight} linear 0.3s forwards;
    overflow: hidden;
    margin: 5px 0px 5px 0;
`;
export const IconRow = styled.div`
    width: 80%;
    padding: 20px;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    opacity: 0;
    transform: translate(-80%, 0%);    
    justify-content: space-around;
    min-width: 10%;
    height: 80px;
    animation: 1s ${textRight} linear 0.3s forwards;
`;


export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 800px;
    height: 100vh;
    background: black;
    // background: linear-gradient(180deg, rgba(106,106,106,1) 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,1) 84%, rgba(106,106,106,1) 100%);
    // @media (max-width: )
`;
