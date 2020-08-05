import React from 'react';
import Bubble from '../ChatBubble';

import { Wrap, ImgWrap, Img, ImgCaption,
    TextWrap, LargeTxt, Txt
} from './style';

const Avatar = () => {
    return (
        <Wrap>
            <ImgWrap>
                    <Img src="/netero.jpg" />
                    <ImgCaption>Le Dev</ImgCaption>
            </ImgWrap>
            <Bubble />
            <TextWrap>
                <LargeTxt>Frontend Developer</LargeTxt>
                <Txt>Build your online ambition using the lates technologies</Txt>
            </TextWrap>
        </Wrap>
    )
}

export default Avatar;