import styled from 'styled-components';

export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: flex-end;
    flex-direction: row;
    width: 100%;
    min-height: 800px;
    height: 100vh;
    background: linear-gradient(180deg, rgba(106,106,106,1) 0%, rgba(0,0,0,1) 16%, rgba(0,0,0,1) 84%, rgba(106,106,106,1) 100%);
    // @media (max-width: )
`;
export const TextWrap = styled.article`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 10px solid pink;
    width: 50%;
    height: 50%;
`;
export const LargeTxt = styled.h3`
    border: 1px solid pink;
`;
export const Txt = styled.p`
    border: 1px solid pink;
`;