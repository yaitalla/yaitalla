import React from 'react';
import { HtmlIcon, CssIcon, JsIcon, ReactIcon, NodeJsIcon, GithubIcon } from '../../components/Icons';
import NameAnimation from '../../components/NameAnim';
import { Section, LeftSide, RightSide, YassinePic, Text, IconRow } from './style';

const AboutSection = () => {
    return (
        <Section id={'aboutSection'}>
            <LeftSide>
                <YassinePic src={'/yassine.jpeg'}/>
            </LeftSide>
            <RightSide>
                <NameAnimation/>
                <Text>Hi !</Text>
                <Text>I am a Web Developer</Text>
                <Text>I can build your online ambition using the latest web technologies.</Text>
                <IconRow>
                    <HtmlIcon/>
                    <CssIcon/>
                    <JsIcon/>
                    <ReactIcon/>
                    <NodeJsIcon/>
                    <GithubIcon/>
                </IconRow>
            </RightSide>
        </Section>
    )
}

export default AboutSection;