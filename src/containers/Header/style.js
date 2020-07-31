import styled from 'styled-components';

export const Navwrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 100;
    height: 50px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 1px solid silver;
    background: white;
`;
export const Navbar = styled.nav`
    display: flex;
    width: 80%;
    background: silver;
`;
export const StyledA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    border: 1px solid red;
    text-decoration: none;
`;
export const LogoWrap = styled.div`
    border: 1px solid cyan;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 50px;
`;
export const Logo = styled.p`
    margin: 0;
    display: flex;
    width: 100%;
    height: 100%;
    border: 1px solid red;
    border-radius: 50%;
    justify-content: center;
    font-size: 35px;
    line-height: 50px;
`;