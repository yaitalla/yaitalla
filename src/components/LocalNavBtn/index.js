import React from 'react';
import { ButtonWrap, NavBtn } from './style';

const LocalNavButton = ({ display, cb, content }) => {
    return (
        <ButtonWrap opacity={display}>
            <NavBtn onClick={cb}>{content}</NavBtn>
        </ButtonWrap>
    )
}

export default LocalNavButton;