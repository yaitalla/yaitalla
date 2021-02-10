import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: flex-end;
    justify-content: center;
    flex-direction: row;
    width: 100%;
    min-height: 800px;
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
