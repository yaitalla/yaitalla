import styled, {keyframes} from 'styled-components';

const appear = keyframes`
    60%{
        transform: translate(-100%);
        opacity: 0;
    }
    100%{
        transform: translate(0%);
        opacity: 1;
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
    @media (max-width: 600px){
        flex-direction: column;
        justify-content: center;
        align-content: center;
    }
`;
export const SlideTitle = styled.div`
    transition:  0.9s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    width: 100%;
    height: 100%;
    opacity: ${props => props.visu};
    transform: translate(${props => props.slide}%);
    @media (max-width: 600px) {
        display: flex;
        align-items: center;
        flex-direction: column;
        justify-content: center;
    }
`;
export const Appear = styled.div`
    transition:  0.9s ease-in-out;
    display: flex;
    transform: translate(-100%);
    opacity: 0;
    animation: ${appear} 3s forwards;
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

export const RightSide = styled.div`
    width: 100%;
    z-index: 0;
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
