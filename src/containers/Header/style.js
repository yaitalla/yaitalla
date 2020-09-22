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
    box-shadow: 2px 5px 3px 0px rgba(255, 255, 255, 0.2);
    background: rgba(255, 255, 255, 0.2)
`;
export const Navbar = styled.nav`
    display: flex;
    justify-content: flex-end;
    min-width: 360px;
    background: rgba(255, 255, 255, 0.2)
    @media (max-width: 600px){
        display: none;
    }
`;
export const StyledA = styled.a`
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 120px;
    text-decoration: none;
    font-size: 20px;
    color: white;
    -webkit-text-stroke: 1px silver;
    &:hover{
        -webkit-text-stroke: 1px white;
        font-size: 22px;
    }
`;
export const LogoWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    width: 200px;
`;
export const Logo = styled.p`
    font-family: 'Great Vibes', cursive;
    display: flex;
    width: 50%;
    height: 100%;
    justify-content: center;
    font-size: 35px;
    line-height: 50px;
    color white;
`;