import React from 'react';
import { BtnLine, BtnWrap, MoreBtn } from './style';

const ButtonLine = (one, two) => {
    return (
        <BtnLine>
            <BtnWrap>
                <MoreBtn onClick={() => setSlided(!slided)} >{"<< back"}</MoreBtn>
            </BtnWrap>
            <BtnWrap>
                <MoreBtn onClick={nextStep} >{"continue >>"}</MoreBtn>
            </BtnWrap>
        </BtnLine>
    )
}

export default ButtonLine;