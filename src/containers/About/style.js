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

export const YassinePic = styled.img`
    position: relative;
    z-index: 3;
    border-radius: 50%;
    border: 5px solid silver;
    height: 200px;
    overflow: hidden;
    padding: 0;
    @media (max-width: 600px) {
        height: 100px;
    }
`;
export const Name = styled.h2`
    width: 80%;
    min-width: 300px;
    letter-spacing: 3px;
    font-family: RobotoCondensed-Bold;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    margin: 0;
`;
export const Text = styled.h3`
    width: 80%;
    min-width: 300px;
    font-family: RobotoCondensed-Bold;
    display: flex;
    justify-content: center;
    text-align: center;
    color: white;
    margin: 20px 0;
`;

export const BtnLine = styled.div`
    display: flex;
    flex-direction: row;
    width: 300px;
    justify-content: space-around;
`;

export const BtnWrap = styled.span`
    height: 25px;
    position: relative;
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
export const MoreBtn = styled.button`
    font-family: RobotoCondensed-Bold;
    background: black;
    color: white;
    border: none;
    cursor: pointer;
    animation: ${colorshift} 10s infinite;
`;

export const IconRow = styled.div`
    width: 80%;
    margin-top: 20px;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    min-width: 10%;
    height: 80px;
`;

export const Slider = styled.div`
    transition:  0.9s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(${props => props.slide}%);
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;
export const Info = styled.div`
    transition: 1s ease-in-out;
    position: absolute;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    transform: translate(${props => props.slide}%);
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;
export const Section = styled.section`
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    width: 100%;
    overflow: hidden;
    min-height: 800px;
    height: 100vh;
    
`;
export const LeftSide = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    margin-top: 10px;
    @media (max-width: 600px) {
        height: 20%;
    }
`;
export const RightSide = styled.div`
    width: 100%;
    height: 100%;
    margin-top: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    @media (max-width: 600px) {
        height: 50%;
    }
    
`;

