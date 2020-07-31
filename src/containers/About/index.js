import React from 'react';
import Bubble from '../../components/ChatBubble';
import { Section, TextWrap, LargeTxt, Txt,
    ImgWrap, Img, ImgCaption
} from './style';

const AboutSection = () => {
    return (
        <Section>
            <ImgWrap>
                <Img src="/netero.jpg" />
                <ImgCaption>Le Dev</ImgCaption>
            </ImgWrap>
            <Bubble/>
            <TextWrap>
                <LargeTxt>Frontend Developer</LargeTxt>
                <Txt>Build your online ambition using the lates technologies</Txt>
            </TextWrap>
        </Section>
    )
}

export default AboutSection;