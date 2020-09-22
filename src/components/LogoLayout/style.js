import styled, {keyframes} from 'styled-components';

const rotate = keyframes`
    from {
        transform: scale(0) rotate(0deg) translate(-50%, -50%);   
        opacity: 1;
    }
    to {
        transform: scale(20) rotate(960deg) translate(-50%, -50%); 
        opacity: 0;
    }
`;

export const Y = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    background: rgba(100,100,100,0.1);
    clip-path: polygon(0 0, 40% 0, 30% 5%, 50% 42%, 70% 5%, 60% 0, 100% 0, 55% 50%, 55% 95%, 75% 100%, 25% 100%, 45% 95%, 45% 50%);

`;
export const A = styled.div`
    position: absolute;
    width: 100%;
    height: 80%;
    background: rgba(100,100,100,0.1);
    clip-path: polygon(30% 0, 70% 0, 51% 5%, 70% 64%, 90% 95%, 100% 100%, 60% 100%, 70% 95%, 60% 70%, 50% 60%, 60% 50%, 50% 38%, 40% 50%, 49% 60%, 40% 70%, 30% 95%, 40% 100%, 0 100%, 10% 95%, 30% 64%, 49% 5%);
`;

export const Logo = styled.div`
    display: flex;
    align-items: center;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 25%;
    left: 25%;
    transform-origin: top left;
    transform: scale(0) rotate(0deg) translate(-50%, -50%);
    animation: ${rotate} 12s ease-in forwards infinite;
    &:nth-of-type(2){
        top: 30%;
        left: 80%;
        animation-delay: 2s;
    }
    &:nth-of-type(3){
        top: 66%;
        left: 78%;
        animation-delay: 4s;
    }
    &:nth-of-type(4){
        top: 80%;
        left: 40%;
        animation-delay: 6s;
    }
    &:nth-of-type(5){
        top: 40%;
        left: 50%;
        animation-delay: 8s;
    }
    &:nth-of-type(6){
        top: 50%;
        left: 10%;
        animation-delay: 10s;
    }
`;

export const Layer = styled.div`
    overflow: hidden;
`;