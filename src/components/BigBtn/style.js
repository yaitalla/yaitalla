import styled, { keyframes } from 'styled-components';
const animate = keyframes`
    0% {
        color: #d3b7f7;
    }
    50% {
        color: black;
    }
    100% {
        color: #fff;
        
    }
`;

const sheen = keyframes`
    0%{
        transform: rotateZ(60deg) translate(-5em, 7.5em);
    }
    10%{
        transform: rotateZ(60deg) translate(10em, -12em);
    }
    100% {
        transform: rotateZ(60deg) translate(10em, -12em);
    }
`;

export const Wrap = styled.div`
    width: 100%;
    height: 50vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`;
export const BtnFrame = styled.div`
    background: black;
    overflow: hidden;
    position: relative;
    box-shadow: -5px 5px 15px 0px rgba(235,235,235,0.2);
    transition: 0.2s ease;
    &:hover {
        box-shadow: -6px 10px 10px 0px rgba(235,235,235,0.2);
    }
    &:after {
        content: '';
        position: absolute;
        top: -50%;
        right: -50%;
        bottom: -50%;
        left: -50%;
        background: linear-gradient(to bottom, rgba(229, 172, 142, 0), rgba(255,255,255,0.5) 50%, rgba(229, 172, 142, 0));
        transform: rotateZ(60deg) translate(-5em, 7.5em);
        animation: 7s ${sheen} infinite;
    }
`;
export const Button = styled.div`
    cursor: pointer;
    outline: none;
    color: #fff;
    position: relative;
    letter-spacing: 0.1em;
    font-weight: 400;
    padding: 1rem 3rem 1rem 3rem;
    text-transform: uppercase;
    font-size: 1.5em;
    width: 160px;
    max-width: 160px;
    height: 45px;
    max-height: 45px;
    color: #D3B7F7;
    background: transparent;
    border: 3px solid #D3B7F7;
    -webkit-transition: border 0.5s ease-out;
    transition: border 0.5s ease-out;
    &:after{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: '';
        border-radius: 50%;
        display: block;
        width: 22em;
        height: 22em;
        left: -5.5em;
        text-align: center;
        -webkit-transition: box-shadow 0.5s ease-out;
        transition: box-shadow 0.5s ease-out;
        transition-delay: 0.25s;
        -webkit-transition-delay: 0.25s;
        z-index: 1;
    }
    &:before{
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        margin: auto;
        content: '';
        border-radius: 50%;
        display: block;
        width: 22em;
        height: 22em;
        left: -5.5em;
        text-align: center;
        -webkit-transition: box-shadow 0.5s ease-out;
        transition: box-shadow 0.5s ease-out;
        transition-delay: 0.75s;
        -webkit-transition-delay: 0.75s;
        z-index: 1;
    }
    &:hover{
        color: white;
        border-color: #8460af;
        animation: ${animate} 1.5s ease;
        -webkit-transition: border 0.2s ease;
        transition: border 0.2s ease;
        &:before {
            box-shadow: inset 0 0 0 11em #d3b7f7;
            transition-delay: 0.05s;
        }
        &:after{
            box-shadow: inset 0 0 0 11em black;
            transition-delay: 0.5s;
        }
    }
`;
export const A = styled.a`
    position: absolute;
    text-decoration: none;
    z-index: 3;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    &:visited{
        color:  #d3b7f7;
    }
`;