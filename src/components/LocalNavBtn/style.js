import styled, {keyframes} from 'styled-components';

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


export const ButtonWrap = styled.span`
    height: 25px;
    position: relative;
    align-self: center;
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
export const NavBtn = styled.button`
    font-family: RobotoCondensed-Bold;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    animation: ${colorshift} 10s infinite;
`;