import styled, { keyframes } from 'styled-components';

const arrow = keyframes`
    0%{
        opacity: 0;
    }
    40%{
        opacity: 1;
    }
    80%{
        opacity: 0;
    }
    100%{
        opacity: 0;
    }
`;

export const Wrap = styled.div`
    display: flex;
    border-radius: 50%;
    margin: 0;
    z-index: 2;
    cursor: pointer;
    position: absolute;
    bottom: 5%;
    align-self: center;
    max-width: 60px;
    max-height: 80px;
    overflow: hidden;
    transform: rotate(${props => props.up});
    &:hover {
        border-color: transparent;
        path {
            animation: none;
            stroke: silver;
        }
    }
    @media (max-width: 600px) {
        bottom: 15%;
    }
`;
export const UpArrow = styled.svg`
    width: 60px;
    height: 72px;
`;
export const Path = styled.path`
    stroke: #556270;
    fill: transparent;
    stroke-width: 1px;
    animation: ${arrow} 5s infinite;
    -webkit-animation: ${arrow} 5s infinite; 
    animation-delay:${(props) => props.delay}s;
    -webkit-animation-delay:${(props) => props.delay}s;
`;