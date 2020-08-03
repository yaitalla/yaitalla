import React from 'react';
import Bubble from '../../components/ChatBubble';
import Avatar from '../../components/Avatar';
import { Section, TextWrap, LargeTxt, Txt,
    ImgWrap, Img, ImgCaption
} from './style';

const AboutSection = () => {
    return (
        <Section>
            <Avatar />
            <TextWrap>
                <LargeTxt>Frontend Developer</LargeTxt>
                <Txt>Build your online ambition using the lates technologies</Txt>
            </TextWrap>
        </Section>
    )
}

export default AboutSection;