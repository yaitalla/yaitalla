import styled from 'styled-components';

export const IconRow = styled.div`
    width: 70%;
    z-index: 1;
    position: absolute;
    display: flex;
    align-items: flex-end;
    overflow: hidden;
    top: 20%;
    flex-direction: row;
    justify-content: space-around;
    min-width: 10%;
    height: 75px;
    @media (max-width: 600px) {
        width: 90%;
        top: 30%;
        justify-content: space-around;
    }
`;