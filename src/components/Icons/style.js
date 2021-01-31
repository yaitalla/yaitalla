import styled, {keyframes} from 'styled-components';

const jump = keyframes`
    0%{
        transform: translateY(120%);
    }
    10%{
        transform: translateY(-50%);
    }
    20%{
        transform: translateY(0%);
    }
    25%{
        transform: translateY(-18%);
    }
    30%{
        transform: translateY(0%);
    }
    100%{
        transform: translateY(0%);
    }
`;

const hide = keyframes`
    0%{
        transform: translateY(0%);
    }
    40%{
        transform: translateY(-50%) scale(0.9) ;
    }
    100%{
        transform: translateY(120%) scale(0.8);
    }
`;

export const IconWrap = styled.div`
    width: 50px;
    height: 50px;
    color: white;
    transform: translateY(120%);
    transition: 1s ease-in-out;
    &.opened{
        animation: ${jump} 1s linear forwards;
        &:nth-of-type(1){
            animation-delay: 0.1s;
        }
        &:nth-of-type(2){
            animation-delay: 0.2s;
        }
        &:nth-of-type(3){
            animation-delay: 0.3s;
        }
        &:nth-of-type(4){
            animation-delay: 0.4s;
        }
        &:nth-of-type(5){
            animation-delay: 0.5s;
        }
        &:nth-of-type(6){
            animation-delay: 0.6s;
        }
        &:nth-of-type(7){
            animation-delay: 0.7s;
        }
    }
    &.closed{
        animation: ${hide} .3s linear forwards;
    }
    @media (max-width: 600px) {
        margin: 5px;
    }
`;