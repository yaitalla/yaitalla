import React from 'react';
import Bubble from '../ChatBubble';

import { Wrap, ImgWrap, Img, ImgCaption } from './style';

const Avatar = () => {
    return (
        <Wrap>
            <ImgWrap>
                    <Img src="/netero.jpg" />
                    <ImgCaption>Le Dev</ImgCaption>
            </ImgWrap>
            <Bubble />
        </Wrap>
    )
}

export default Avatar;