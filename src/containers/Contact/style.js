import styled, { keyframes } from 'styled-components';

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    min-height: 800px;
    height: 100vh;
    background: black;
    // @media (max-width: )
`;
export const NavWrap = styled.nav`
    justify-content: center;
    display: flex;
    align-items: center;
    padding: 25px 0px;
    border: 1px solid pink;
`;
export const Icon = styled.div`
    width: 50px;
    height: 50px;
    color: white;
`;
export const Link = styled.a`
    margin: 10px;
    border: 1px solid pink;
`;

export const Gitlab = styled.svg`
    -ms-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    transform: rotate(360deg);
`;