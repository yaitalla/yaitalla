import styled, { keyframes } from 'styled-components';

export const Left = styled.div`
    position: absolute;
    z-index: 10;
    display: flex;
    justify-content: center;
    left: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    color: white;
    background: rgba(255, 255, 255, 0.2);
    &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: pointer;
    }
    
`;
export const Right = styled.div`
    color: white;
    position: absolute;
    display: flex;
    justify-content: center;
    right: 5%;
    min-width: 60px;
    min-height: 60px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    &:hover {
        background: rgba(255, 255, 255, 0.6);
        color: #16738D;
        cursor: pointer;
    }
`;
export const Wrap = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
    height: 50%;
`;
export const OutterCard = styled.figure`
    margin: 0 auto;
    width: 250px;
    height: 200px;
    position: relative;
    perspective: 1000px;
`;
export const InnerBox = styled.div`
    height: 100%;
    width: 100%;
    position: absolute;
    transform-style: preserve-3d;
    transition: transform 1s;
`;


export const Item = styled.div`
    display: block;
    position: absolute;
    background: #000;
    width: 250px;
    height: 200px;
    line-height: 200px;
    font-size: 5em;
    text-align: center;
    color: #FFF;
    opacity: 0.95;
    background: silver;
    border-radius: 10px;
    transform: rotateY(${props => props.rotationY}deg) translateZ(250px);
`;