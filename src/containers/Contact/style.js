import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
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
export const Title = styled.h2`
    width: 100%;
    letter-spacing: 2px;
    font-size: 1.9rem;
    align-self: flex-start;
    color: white;
    top: 0;
    position: absolute;
    font-family: Teko; 
`;