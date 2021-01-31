import styled from 'styled-components';

export const NavWrap = styled.nav`
    justify-content: space-around;
    display: flex;
    position: relative;
    align-items: center;
    padding: 25px 0px;
    margin: 150px 0px;
    width: 90%;
    &:before {
        visibility: hidden;
        transform: scaleX(0);
        content: "";
        position: absolute;
        z-index: 0;
        width: 100%;
        height: 3px;
        left: 0;
        background-color: white;
        transition: all 0.3s ease-in-out 0s;
    }
    &:hover{
        &:before {
            visibility: visible;
            transform: scaleX(1);
        }
    }
    @media (max-width: 600px){
        &:before {
            visibility: visible;
            transform: scaleX(1);
        }
    }
`;

export const Link = styled.a`
    height: 100%;
    z-index: 3;
    position: relative;
`;
export const Icon = styled.div`
    width: 50px;
    z-index: 3;
    height: 50px;
    color: white;
    position: relative;
    padding: 2px;
    overflow: hidden;
    &:before {
        box-sizing: border-box;
        transform: translateX(100%);
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 99.5%;
        height: 2px;
        border-bottom: 2px solid transparent;
        border-left: 2px solid transparent;
    }
    &:after{
        box-sizing: border-box;
        transform: translateX(-100%);
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 99.5%;
        height: 2px;
        border-top: 2px solid transparent;
        border-right: 2px solid transparent;
    }
    &:hover{
        color: white;
        text-decoration: none;
        transition: 0.4s color linear;
        cursor: pointer;
        &:before{
            transition: 0.1s transform linear 0.2s, 0.1s height linear 0.3s;
            transform: translateX(0) rotate(0deg);
            height: 100%;
            border-color: white;
        }
        &:after{
            transition: 0.1s transform linear, 0.1s height linear 0.1s;
            transform: translateX(0) rotate(0deg);
            height: 100%;
            border-color: white;
        }
    }
    
`;
export const StyledSvg = styled.svg`
      background: black;
      padding: 2px;
`;